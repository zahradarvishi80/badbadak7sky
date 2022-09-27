import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ResortList from "./page/ResortsList";
import ResortDetails from "./page/ResortDetailas";
import Bucket from "./page/Bucket";
const App=()=> {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ResortList />} />
        <Route path="ResortDetails/:id" element={<ResortDetails />} />
        <Route path="Bucket" element={<Bucket />} />
      </Routes>
    </div>
  );
}
export default App