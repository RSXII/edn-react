type AuthFetchMethods = "GET" | "POST" | "PUT";

// Standalone function for authenticated API calls with optional method and body
export async function authFetch(
  url: string,
  authToken: string,
  method: AuthFetchMethods = "GET",
  body?: unknown
) {
  if (!authToken) {
    throw new Error("Authentication token not provided");
  }

  const headers = new Headers();
  headers.append("Authorization", `Bearer ${authToken}`);

  let requestOptions: RequestInit = {
    method: method,
    headers: headers,
  };

  if (body && (method === "POST" || method === "PUT")) {
    headers.append("Content-Type", "application/json");
    requestOptions = { ...requestOptions, body: JSON.stringify(body) };
    console.log("requestOptions", requestOptions);
  }

  const response = await fetch(url, requestOptions);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
}
