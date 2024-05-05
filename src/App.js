import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import Tactics from './Components/Pages/Tactics';
import Learn from './Components/Pages/Learn';
import About from './Components/Pages/About';
import Conte from './Components/Tactics/Conte';
import Pep from './Components/Tactics/Pep';
import Carlo from './Components/Tactics/Carlo';
import Jose from './Components/Tactics/Jose';
import Xabi from './Components/Tactics/Xabi';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tactics" element={<Tactics />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pep" element={<Pep />} />
        <Route path="/jose" element={<Jose />} />
        <Route path="/carlo" element={<Carlo />} />
        <Route path="/Xabi" element={<Xabi />} />
        <Route path="/conte" element={<Conte />} />
      </Routes>
    </Router>
  );
}

export default App;
