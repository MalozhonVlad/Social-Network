import React from 'react';
import './App.css';
import Header from "./compomemts/header/Header.jsx";
import Navbar from "./compomemts/navbar/Navbar";
import Dialogs from "./compomemts/dialogs/Dialogs";
import Profile from "./compomemts/profile/Profile";

function App(props) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                {/*<Dialogs/>*/}
                <Profile />
            </div>
        </div>
    );
}

export default App;
