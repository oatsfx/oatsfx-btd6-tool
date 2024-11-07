import React from "react";
import logo from "./logo.svg";
import { Layout } from "./components/Layout";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Layout />
    </HashRouter>
  );
}

export default App;
