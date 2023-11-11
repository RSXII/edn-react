import { useEffect, useState } from "react";

export const useFetchData = (url: string) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));
  }, [url]);

  return data;
};
