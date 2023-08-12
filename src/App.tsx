import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import { Header } from "./components/pageStyles";

import './index.css'

import { Home } from "./pages/Home";
import { TechWelcome } from "./pages/Tech/welcome";
import { BandWelcome } from "./pages/Worship/welcome";


function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Tech/Welcome" element={<TechWelcome />} />
            <Route path="/Worship/Welcome" element={<BandWelcome />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;