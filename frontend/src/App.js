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
import NoteState from './contexts/notes/NoteState'
import { Alert } from './components/Alert';

function App() {
  return (
    <>
    <NoteState>
    <Router>
      <Navbar/>
      {/* <Alert message="This is amazing brother"/> */}
        <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/about" element={<About/>}></Route>
            </Routes>
        </div>
        </Router>
    </NoteState>
    </>
  );
}

export default App;
