import { useMemo } from "react";
import { useAuth } from "../components/auth/AuthContext";
import { createApiClient } from "./apiClient";

export function useApi() {
  const { token, logout } = useAuth();

  // Recreate client only when the token changes
  return useMemo(
    () => createApiClient(token, logout),
    [token, logout]
  );
}