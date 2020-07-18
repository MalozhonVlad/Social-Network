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

    const DialogsComponent = () => <Dialogs dialogs={props.dialogs} messages={props.messages}/>;
    const ProfileComponent = () => <Profile postsData={props.postsData}/>;
    const NewsComponent = () => <News props={props.news}/>;
    const MusicComponent = () => <Music props={props.music}/>;
    const SettingsComponent = () => <Settings props={props.settings}/>;


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*<Route path="/dialogs" component={Dialogs}/>*/}
                    {/*<Route path="/profile" component={Profile}/>*/}
                    {/*<Route path="/news" component={News}/>*/}
                    {/*<Route path="/music" component={Music}/>*/}
                    {/*<Route path="/settings" component={Settings}/>*/}

                    <Route path="/dialogs" component={DialogsComponent}/>
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
