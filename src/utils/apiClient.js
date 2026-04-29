// const BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:3000/api";
const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";

export class ApiError extends Error {
  constructor(status, body) {
    super(body?.message ?? JSON.stringify(body));
    this.status = status;
    this.body = body;
  }
}

export function createApiClient(token, onUnauthorized) {
  const request = async (path, options = {}) => {
    const { params, ...restOptions } = options;
    const url = params
      ? `${BASE_URL}${path}?${new URLSearchParams(params)}`
      : `${BASE_URL}${path}`;

    console.log(`Making API request to ${url} with options:`, restOptions);

    const res = await fetch(url, {
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
    get: (path, params) => request(path, { method: "GET", params }),
    post: (path, body) => request(path, { method: "POST", body: JSON.stringify(body) }),
    put: (path, body) => request(path, { method: "PUT", body: JSON.stringify(body) }),
    delete: (path, params) => request(path, { method: "DELETE", params }),
  };
}