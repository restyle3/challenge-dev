import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from './components/Home';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div style={{ maxWidth: '30rem', margin: '4rem auto' }}>
      <GlobalProvider>
        <Router>

          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
