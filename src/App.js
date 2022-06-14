import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from './components/Home';
import { AddTask } from './components/AddTask';
import { EditTask } from './components/EditTask';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <Router>
        <h1>Bem-vindo!</h1>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/add" element={<AddTask/>}/>
          <Route path="/edit/:id" element={<EditTask/>}/>
        </Routes>
      </Router>        
    </div>
  )
}

export default App;
