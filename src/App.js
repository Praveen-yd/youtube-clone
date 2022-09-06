import { useState } from "react";

import Home from "./pages/home/Home.js";
import Search from "./pages/search/Search";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header.js";

// export const searchInput = createContext();

function App() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="App">
      {/* <searchInput.Provider value={(inputSearch, setInputSearch)}> */}
      <BrowserRouter>
        <Header inputSearch={inputSearch} setInputSearch={setInputSearch} />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/search/:searchInput"
            element={<Search inputSearch={inputSearch} />}
          />
        </Routes>
      </BrowserRouter>
      {/* </searchInput.Provider> */}
    </div>
  );
}

export default App;
