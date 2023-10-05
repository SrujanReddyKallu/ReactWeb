import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import './pages/Home';
import Example from "./pages/Home";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Example />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
