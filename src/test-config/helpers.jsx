// src/test/helpers.jsx
import { render } from "@testing-library/react";
import { ChakraProvider, PortalManager } from "@chakra-ui/react";
import { MemoryRouter } from "react-router-dom";
import { AuthProvider } from "../components/auth/AuthContext";
import { AlertProvider } from "../context/alertContext";
import theme from "../theme/theme";

export function renderWithProviders(ui, { route = "/" } = {}) {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <ChakraProvider theme={theme}>
        <PortalManager>
          <AlertProvider>
            <AuthProvider>
              {ui}
            </AuthProvider>
          </AlertProvider>
        </PortalManager>
      </ChakraProvider>
    </MemoryRouter>
  );
}

// mock product for reuse across tests
export const mockProduct = {
  id: "d85cc678-0e10-42ba-be13-1e4300f74187",
  title: "Kids Corp Jacket",
  price: 30,
  description: "Cruise the playground in style.",
  slug: "kids_corp_jacket",
  stock: 10,
  sizes: ["XS", "S", "M"],
  gender: "kid",
  tags: ["shirt"],
  images: ["1506211-00-A_0_2000.jpg", "1506211-00-A_1_2000.jpg"],
};