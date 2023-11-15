import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";

import { Home, About, Plans, Company, Profile, Chat } from "./pages";
import HeaderComponent from "./components/HeaderComponent";
import Authentication from "./pages/Authentication";
import FooterComponent from "./components/navigation/FooterComponent";
import { clerkPubKey } from "./config";
import { ClerkProvider, SignUp } from "@clerk/clerk-react";
import PrivateRoute from "./components/authentication/PrivateRoute";

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
            <Route path="/chat" element={<Chat />} />
            <Route
              path="/profile"
              element={<PrivateRoute element={<Profile />} fallback="/" />}
            />
            <Route path="/signin" element={<Authentication />} />
            <Route
              path="/sign-up/*"
              element={<SignUp routing="path" path="/sign-up" />}
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
