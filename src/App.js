import React from 'react';
import './App.css';
import Header from "./compomemts/header/Header.jsx";
import Navbar from "./compomemts/navbar/Navbar";
import Profile from "./compomemts/profile/Profile";

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
