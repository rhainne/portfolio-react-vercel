import { useEffect, useState } from "react";
import { useApi } from "../utils/useApi";
import { ApiError } from "../utils/apiClient";
import { useAuth } from "../components/auth/AuthContext";

const useApiSubmit = ({ action, successMessage, errorMessage }) => {
  const api = useApi();
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (data) => {
    setIsLoading(true);

    try {
      await action(api, data);

      setResponse({
        type: 'success',
        message: successMessage,
      });
    }
    catch (err) {
      setResponse({
        type: 'error',
        message: `${errorMessage} (${err.status}): ${err.message}` ||
          `Operation failed (${err.status}): ${err.message}`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, response, submit };
}

export default useApiSubmit;