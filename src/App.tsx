import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Register from "./pages/signup";
import Login from "./pages/login";
import Home from "./pages/Home";
import {auth} from "./firebase";
import Example from "./pages/jugad";
import Dashboard from "./pages/Dashboard";

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
                <Route path="/" element={<Home name={userName}/>}/>
                <Route path="/signup" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/jugad" element={<Example/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>

            </Routes>
        </BrowserRouter>
    );
}

export default App;
