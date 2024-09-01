import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"; // Assuming default export
import { AboutUs } from "./pages/AboutUs";
import { WhatWeDo } from "./pages/WhatWeDo";
import { GetInvolved } from "./pages/GetInvolved";
import KnowledgeCorner from "./pages/KnowledgeCorner";
import Chat from "./pages/Chat"; // Ensure this import matches your actual file path

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/knowledge-corner" element={<KnowledgeCorner />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
