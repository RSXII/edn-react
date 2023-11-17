import { useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-react";

export const useAuthFetchData = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error] = useState<Error | null>(null);

  const { getToken } = useAuth();

  useEffect(() => {
    let isMounted = true; // Flag to handle component unmount

    async function fetchData() {
      if (!isMounted) return;

      setIsLoading(true);
      let authToken;

      try {
        authToken = await getToken();
        if (!authToken) return;

        const headers = new Headers();
        headers.append("Authorization", `Bearer ${authToken}`);
        console.log("token", authToken);

        const response = await fetch(url, { headers });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonData = await response.json();
        if (isMounted) setData(jsonData);
      } catch (error) {
        if (isMounted) console.log(error);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    fetchData();

    return () => {
      isMounted = false; // Cleanup function to set the flag to false
    };
  }, [url, getToken]);

  return { data, isLoading, error };
};
