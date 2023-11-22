export const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;
export const ednAPIEndpoint = import.meta.env.VITE_EDN_API_ENDPOINT;

if (!clerkPubKey) {
  throw new Error("Missing Publishable Key");
}
