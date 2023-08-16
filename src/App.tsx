import { Routes, BrowserRouter, Route , Navigate} from "react-router-dom";
import { Container } from "react-bootstrap";

import './index.css'

import { Home } from "./pages/Home";
import { TechWelcome } from "./pages/Tech/welcome";
import { BandWelcome } from "./pages/Worship/welcome";


function App() {
  return (
    <>
    <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Tech/Welcome" element={<TechWelcome />} />
            <Route path="/Worship/Welcome" element={<BandWelcome />} />
            <Route
      path="*"
      element={<Navigate to="/" replace={true} />}
    />
          </Routes>
        </BrowserRouter>
    </Container>    
    </>
  );
}

export default App;
