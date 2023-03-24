import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Blog from "./components/blog/Blog";
import Home from "./components/home/Home";
import Fifa from "./components/FIFA2022/Fifa";
import Fixture from "./components/fixture/Fixture";
import Analytic from "./components/analytic/Analytic";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/blog" element={<Blog />}></Route>
        <Route exact path="/fifa" element={<Fifa />} />
        <Route exact path="/fixture" element={<Fixture />} />
        <Route exact path="/analytic" element={<Analytic />} />
      </Routes>
    </>
  );
}

export default App;
