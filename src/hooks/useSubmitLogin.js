import { useState } from "react";
import { useAuth } from "../components/auth/AuthContext";

// const BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:3000/api";
const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";

const useSubmitLogin = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const { login } = useAuth();

  const submit = async (data) => {
    const { username, password } = data;
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: username, password }),
      });

      if (!res.ok)
        throw new Error("Error: ", res);

      const { token } = await res.json();
      login(token); // ← stores in state + localStorage
      setResponse({
        type: 'success',
        message: `Login successful and token stored!`,
      });

    } catch (err) {
      setResponse({
        type: 'error',
        message: `Login failed: ${err.message}`,
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
}

export default useSubmitLogin;
