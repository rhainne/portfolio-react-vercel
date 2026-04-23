const BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:3000/api";

export class ApiError extends Error {
  constructor(status, body) {
    super(body?.message ?? JSON.stringify(body));
    this.status = status;
    this.body = body;
  }
}

export function createApiClient(token, onUnauthorized) {
  const request = async (path, options = {}) => {
    const res = await fetch(`${BASE_URL}${path}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...options.headers,
      },
    });

    if (res.status === 401) {
      onUnauthorized();
      throw new ApiError(401, { message: "Unauthorized: Please log in again." });
    }

    const body = await res.json();

    if (!res.ok)
      throw new ApiError(res.status, body);

    return body;
  };

  return {
    get: (path) => request(path),
    post: (path, body) => request(path, { method: "POST", body: JSON.stringify(body) }),
    put: (path, body) => request(path, { method: "PUT", body: JSON.stringify(body) }),
    delete: (path) => request(path, { method: "DELETE" }),
  };
}