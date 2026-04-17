import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);
const TOKEN_KEY = "auth_token";

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => {
    // Rehydrate from localStorage on first load
    return localStorage.getItem(TOKEN_KEY) || null;
  });

  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem(TOKEN_KEY, newToken);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem(TOKEN_KEY);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, isAuthenticated: !!token }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook — the only way components should access auth
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}