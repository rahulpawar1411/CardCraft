// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Show from "./pages/Show";
import Update from "./pages/Update";

const App = () => {
  return (
    <BrowserRouter  basename="/CardCraft">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show/:id" element={<Show />} />
        <Route path="/update" element={<Update />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
