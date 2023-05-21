
import React from "react";
import './App.css';
import {Route, Routes ,Router} from "react-router-dom";
import Header from './components/Header/Header';
import HomePage from "./components/Header/HomePage/HomePage";
import Service from './Pages/Service/Service'
import Contact from './Pages/Contact/Contact'
import AboutUs from "./Pages/AboutUs/AboutUs";
import Home from "./Pages/Home/Home";

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
       <Route exact path='/home' element={<Home/>}/>
       <Route exact path='/service' element={<Service/>}/>
       <Route exact path='/about-us' element={<AboutUs/>}/>
       <Route exact path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;

