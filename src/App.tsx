import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Register from "./pages/signup";
import Login from "./pages/login";
import Home from "./pages/Home";
import {auth} from "./firebase";
import Example from "./pages/jugad";
import Dashboard from "./pages/Dashboard";
import project1 from "./pages/project1";
import Project1 from "./pages/project1";
function App() {
    const [userName, setUserName] = useState("");

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUserName(user.email?user.email:"");
            } else setUserName("");
        });
    }, []);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Example/>}/>
                <Route path="/signup" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/jugad" element={<Example/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/project1" element={<Project1/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
