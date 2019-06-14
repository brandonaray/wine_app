import React from "react";
import "./App.css";
import Home from "./Home.js";
import Navbar from "./Navbar.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home name={"winestore"} />
    </div>
  );
}

export default App;
