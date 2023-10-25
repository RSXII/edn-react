import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import HeaderComponent from "./components/HeaderComponent";
import About from "./pages/About";
import Plans from "./pages/Plans";
import Company from "./pages/Company";

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
    </div>
  );
}
