import logo from './logo.svg';
import './App.css';
import Navbar from "./Component/Navbar"
import {  Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={ <Contact/>} />
      </Routes>
        <Navbar />
       
     
    </div>
  );
}

export default App;
