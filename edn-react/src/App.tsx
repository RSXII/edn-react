import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";

import Home from "./pages/Home";
import HeaderComponent from "./components/HeaderComponent";
import About from "./pages/About";
import Plans from "./pages/Plans";
import Company from "./pages/Company";
import FooterComponent from "./components/navigation/FooterComponent";
import { clerkPubKey } from './config';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp,
  UserButton,
} from "@clerk/clerk-react";

function ProtectedPage() {
  return (
    <>
      <h1>Protected page</h1>
      <UserButton />
    </>
  );
}
function ClerkProviderWithRoutes() {
  const navigate = useNavigate();
 
  return (
    <div className="bg-backgroundColor">
      
      <HeaderComponent />
    <ClerkProvider
      publishableKey={clerkPubKey}
      navigate={(to) => navigate(to)}
    >
      <HeaderComponent />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/company" element={<Company />} />
        <Route
          path="/sign-in/*"
          element={<SignIn routing="path" path="/sign-in" />}
        />
        <Route
          path="/sign-up/*"
          element={<SignUp routing="path" path="/sign-up" />}
        />
        <Route
          path="/protected"
          element={
          <>
            <SignedIn>
              <ProtectedPage />
            </SignedIn>
             <SignedOut>
              <RedirectToSignIn />
           </SignedOut>
          </>
          }
        />
      </Routes>
      </main>
    </ClerkProvider>
    <FooterComponent />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ClerkProviderWithRoutes />
    </BrowserRouter>
  );
}