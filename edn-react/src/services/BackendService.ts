import { useEffect, useState } from "react";
import { useClerk } from "@clerk/clerk-react";
import { useAuth } from "@clerk/clerk-react";

export const useFetchData = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const { session } = useClerk();

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      try {
        const headers = new Headers();
        const token = await session?.getToken();
        const sessionId = session?.id;

        console.log("token", token);
        console.log("sessionId", sessionId);

        if (token) {
          headers.append("Authorization", `Bearer ${session} ${token}`);
        }

        const response = await fetch(url, { headers });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error:", error);
        // setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [session, url]);

  return { data, isLoading, error };
};

export function useFetch(url: string) {
  const { getToken } = useAuth();

  const authenticatedFetch = async () => {
    return fetch(url, {
      headers: { Authorization: `Bearer ${await getToken()}` },
    }).then((res) => res.json());
  };

  return authenticatedFetch;
}
