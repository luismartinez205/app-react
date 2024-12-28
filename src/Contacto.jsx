import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Footer from "./Nav";

const Acerca = () => {
  return (
    <div>
      <App />
      <Footer />
    </div>
  );
};

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/acerca" element={<Acerca />} />
      </Routes>
    </Router>
  );
}

export default Main;
