import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";

import { Home, About, Plans, Company } from "./pages";
import HeaderComponent from "./components/HeaderComponent";
import Authentication from "./pages/Authentication";
import FooterComponent from "./components/navigation/FooterComponent";
import { clerkPubKey } from './config';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignUp,
} from "@clerk/clerk-react";
import Admin from "./pages/Admin";

function ClerkProviderWithRoutes() {
  const navigate = useNavigate();
 
  return (
    <div className="bg-backgroundColor">
      
      
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
          path="/signin"
          element={<Authentication />}
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
              <Admin />
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