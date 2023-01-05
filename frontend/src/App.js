import './App.css';
import Navbar from './components/Navbar';
import { About } from './components/About';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from './components/Home';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/about" element={<About/>}></Route>
            </Routes>
        </Router>
    </>
  );
}

export default App;
