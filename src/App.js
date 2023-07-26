import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Search from "./pages/Search";
import ErrorPage from "./pages/ErrorPage";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/errorpage' element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
};

export default App;
