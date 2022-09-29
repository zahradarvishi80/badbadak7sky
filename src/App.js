import * as React from "react";
import { Routes, Route } from "react-router-dom";
import ResortList from "./page/ResortsList";
import ResortDetails from "./page/ResortDetailas";
import Bucket from "./page/Bucket";
import {ContextProvider} from "./Context"
import { BrowserRouter } from "react-router-dom";
import Secound from "./page/Second";
import Third from "./page/Third";
const App=()=> {
  return (
    <ContextProvider>
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ResortList />} />
        <Route path="ResortDetails/:id" element={<ResortDetails />} />
        <Route path="Bucket" element={<Bucket />} />
        <Route path="Secound" element={<Secound/>  } />
        <Route path="third" element={<Third/>  } />
      </Routes>
      </BrowserRouter>
    </div>
    </ContextProvider>
  );
}
export default App