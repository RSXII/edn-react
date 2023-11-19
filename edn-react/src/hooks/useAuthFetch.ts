import { useEffect, useState } from "react";
import { authFetch } from "../services/authFetch"; // Update this path

export const useAuthFetchData = <T>(
  url: string,
  authToken: Promise<string | null>
) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      if (!isMounted) return;

      setIsLoading(true);
      const token = await authToken;
      if (!token) return;

      try {
        const jsonData = await authFetch(url, token);
        if (isMounted) setData(jsonData);
      } catch (error) {
        if (isMounted) setError(error);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, isLoading, error };
};
