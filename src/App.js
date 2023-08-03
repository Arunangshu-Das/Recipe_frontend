import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Search from "./pages/Search";
import ErrorPage from "./pages/ErrorPage";
import Upload from "./pages/Upload";
import { Toaster } from 'react-hot-toast';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/errorpage' element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
};

export default App;
