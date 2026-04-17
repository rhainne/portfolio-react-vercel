const BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:3000/api";

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
      onUnauthorized(); // triggers logout()
      throw new Error("Session expired");
    }

    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return res.json();
  };

  return {
    get: (path) => request(path),
    post: (path, body) => request(path, { method: "POST", body: JSON.stringify(body) }),
    put: (path, body) => request(path, { method: "PUT", body: JSON.stringify(body) }),
    delete: (path) => request(path, { method: "DELETE" }),
  };
}