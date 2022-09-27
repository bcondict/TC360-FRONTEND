import React from "react";
import { NavLink, RouterProvider } from "react-router-dom";
import "./App.css";
import { Router } from "./pages/router";
import { Input } from './components/input.component'

function App() {
  return (
    <div className="App">
      <Router  />
    </div>
  );
}

export default App;
