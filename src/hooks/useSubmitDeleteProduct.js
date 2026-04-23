import { useEffect, useState } from "react";
import { useApi } from "../utils/useApi";
import { ApiError } from "../utils/apiClient";
import { useAuth } from "../components/auth/AuthContext";

const useSubmitDeleteProduct = () => {
  const api = useApi();
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (data) => {
    setIsLoading(true);

    try {
      const res = await api.delete(`/products/${data.id}`); // Path param for product ID

      setResponse({
        type: 'success',
        message: `Product deleted successfully!`,
      });
    }
    catch (err) {
      setResponse({
        type: 'error',
        message: `Product deletion failed (${err.status}): ${err.message}`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, response, submit };
}

export default useSubmitDeleteProduct;