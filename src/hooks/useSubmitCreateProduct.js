import { useEffect, useState } from "react";
import { useApi } from "../utils/useApi";
import { ApiError } from "../utils/apiClient";
import { useAuth } from "../components/auth/AuthContext";

const useSubmitCreateProduct = () => {
  const api = useApi();
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (data) => {
    setIsLoading(true);

    try {
      const res = await api.post("/products", data);

      setResponse({
        type: 'success',
        message: `Product created successfully!`,
      });
    }
    catch (err) {
      setResponse({
        type: 'error',
        message: `Product creation failed (${err.status}): ${err.message}`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, response, submit };
}

export default useSubmitCreateProduct;