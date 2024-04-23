import React from "react";
import "./App.css";
import { Homepage, SingleViewPage, NavBar } from "./components";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="singleview" element={<SingleViewPage />} />
      </Routes>
    </div>
  );
}

export default App;
