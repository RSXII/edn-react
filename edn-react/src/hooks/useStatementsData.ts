import { useState, useEffect } from "react";
import { useFetchData } from "../services/BackendService";

const useStatementsData = () => {
  const [error, setError] = useState<Error | null>(null);

  const listStatements = useFetchData(
    "https://edn-api-service-fcbclhpmia-uc.a.run.app/api/getAllListStatements"
  );
  const imageStatements = useFetchData(
    "https://edn-api-service-fcbclhpmia-uc.a.run.app/api/getAllImageStatements"
  );

  useEffect(() => {
    if (!listStatements || !imageStatements) {
      setError(new Error("Failed to fetch data"));
    }
  }, [listStatements, imageStatements]);

  return { listStatements, imageStatements, error };
};

export default useStatementsData;
