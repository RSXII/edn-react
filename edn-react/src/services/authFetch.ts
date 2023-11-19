// Standalone function for authenticated API calls
export async function authFetch(url: string, authToken: string) {
  if (!authToken) {
    throw new Error("Authentication token not provided");
  }

  const headers = new Headers();
  headers.append("Authorization", `Bearer ${authToken}`);

  const response = await fetch(url, { headers });
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
}
