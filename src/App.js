import React from 'react';
import './App.css';
import Header from "./compomemts/header/Header.jsx";
import Navbar from "./compomemts/navbar/Navbar";
import Dialogs from "./compomemts/dialogs/Dialogs";
import Profile from "./compomemts/profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./compomemts/news/News";
import Music from "./compomemts/music/Music";
import Settings from "./compomemts/settings/Settings";


const App = (props) => {

    const DialogsComponent = () => <Dialogs state={props.state.dialogsPage}/>;
    const ProfileComponent = () => <Profile state={props.state.profilePage}/>;
    const NewsComponent = () => <News props={props.news}/>;
    const MusicComponent = () => <Music props={props.music}/>;
    const SettingsComponent = () => <Settings props={props.settings}/>;


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>

                    <Route path="/dialogs" component={DialogsComponent}/>
                    {/*<Route path="/dialogs" render={ () => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>*/}
                    <Route path="/profile" component={ProfileComponent}/>
                    <Route path="/news" component={NewsComponent}/>
                    <Route path="/music" component={MusicComponent}/>
                    <Route path="/settings" component={SettingsComponent}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
