import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import Register from "./pages/signup";
import Login from "./pages/login";
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Register />} />
            <Route path="/login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
