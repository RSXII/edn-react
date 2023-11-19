import { Navigate } from "react-router-dom";
import { SignedIn, useAuth } from "@clerk/clerk-react";
import { ReactNode } from "react";

export default function PrivateRoute({
  element,
  fallback,
}: {
  element: ReactNode;
  fallback: string;
}) {
  const { isSignedIn } = useAuth();
  function signedIn({ signedIn = false }: { signedIn?: boolean }): ReactNode {
    return signedIn ? element : <Navigate to={fallback} />;
  }
  return <SignedIn>{signedIn({ signedIn: isSignedIn })}</SignedIn>;
}
