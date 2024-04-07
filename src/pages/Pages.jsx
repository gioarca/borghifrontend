import Home from "./Home";
import About from "./About";
import Borgo from "./Borgo";
import Login from "./Login";
import LoginSuccess from "./LoginSuccess";
import Registrazione from "./Registrazione";
import Contatti from "./Contatti";
import Work from "./Work";
import Grazie from "./Grazie";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function Pages() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/borgo/:_id" element={<Borgo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginSuccess" element={<LoginSuccess />} />
        <Route path="/registrazione" element={<Registrazione />} />
        <Route path="/contatti" element={<Contatti />} />
        <Route path="/grazie" element={<Grazie />} />
        <Route path="/workinprogress" element={<Work />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
