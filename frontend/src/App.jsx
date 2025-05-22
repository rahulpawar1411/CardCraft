// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Show from "./pages/Show";
import Update from "./pages/Update";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show/:id" element={<Show />} />
        <Route path="/update" element={<Update />} />

      </Routes>
    </Router>
  );
};

export default App;
