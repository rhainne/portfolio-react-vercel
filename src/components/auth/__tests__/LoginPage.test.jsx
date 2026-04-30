// src/components/auth/__tests__/LoginPage.test.jsx
import { screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../../test/helpers";
import { LoginPage } from "../../Products/LoginPage";

// mock the API so no real HTTP calls are made
// Mock fetch globally
global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: async () => ({ token: "fake-jwt-token" }),
  })
);

// Mock alertContext
const mockOnOpen = vi.fn();
vi.mock("../../../context/alertContext", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,                              // keeps AlertProvider as real
    useAlertContext: () => ({ onOpen: mockOnOpen }),  // only mock the hook
  };
});

describe("LoginPage", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it("renders email and password fields", () => {
    renderWithProviders(<LoginPage />);

    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /log in/i })).toBeInTheDocument();
  });

  it("shows error when submitted empty", async () => {
    renderWithProviders(<LoginPage />);

    await userEvent.click(screen.getByRole("button", { name: /log in/i }));

    await waitFor(() => {
      expect(screen.getByText(/username.*required/i)).toBeInTheDocument();
    });
  });

  it("calls login and stores token on success", async () => {
    const user = userEvent.setup();
    renderWithProviders(<LoginPage />);

    await user.type(screen.getByLabelText(/username/i), "uasername@teslo.com");
    await user.type(screen.getByLabelText(/password/i), "password-teslo");
    await user.click(screen.getByRole("button", { name: /log in/i }));

    await waitFor(() => {
      expect(localStorage.getItem("auth_token")).toBe("fake-jwt-token");
    });
  });

  it("shows error message on failed login", async () => {
    // override mock to simulate failure
    global.fetch.mockResolvedValueOnce({
      ok: false,
      status: 401,
      json: async () => ({ message: "Invalid credentials", token: null }),
    });

    renderWithProviders(<LoginPage />);

    await userEvent.type(screen.getByLabelText(/username/i), "wrong@example.com");
    await userEvent.type(screen.getByLabelText(/password/i), "wrongpass");
    await userEvent.click(screen.getByRole("button", { name: /log in/i }));

    await waitFor(() => {
      expect(mockOnOpen).toHaveBeenCalledWith(
        "error",
        expect.stringMatching(/invalid credentials/i)
      );
    });

    expect(localStorage.getItem("auth_token")).toBeNull();
  });
});