import React from 'react';
import './App.css';
import Header from "./compomemts/Header.jsx";
import Navbar from "./compomemts/Navbar";
import Profile from "./compomemts/Profile";

function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <Profile />
        </div>
    );
}

export default App;
