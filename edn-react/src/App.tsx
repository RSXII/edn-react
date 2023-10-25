import {
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";

import Home from "./pages/Home";
import HeaderComponent from "./components/HeaderComponent";
import About from "./pages/About";
import Plans from "./pages/Plans";
import Company from "./pages/Company";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HeaderComponent />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/company" element={<Company />} />
    </Route>
  )
);

export default function App() {
  return (
    <div className="bg-backgroundColor">
      <BrowserRouter>
        <HeaderComponent />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/company" element={<Company />} />
          </Routes>
        </main>
      </BrowserRouter>

      {/* <Home /> */}
      <RouterProvider router={router} />
    </div>
  );
}
