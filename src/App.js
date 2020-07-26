import React from 'react';
import './App.css';
import Header from "./compomemts/header/Header.jsx";
import Navbar from "./compomemts/navbar/Navbar";
import Profile from "./compomemts/profile/Profile";
import {Route} from "react-router-dom";
import News from "./compomemts/news/News";
import Music from "./compomemts/music/Music";
import Settings from "./compomemts/settings/Settings";
import DialogsContainer from "./compomemts/dialogs/DialogsContainer";
import UsersContainer from "./compomemts/users/UsersContainer";


const App = (props) => {

    const DialogsComponent = () => <DialogsContainer/>;
    const ProfileComponent = () => <Profile/>;

    const UsersComponent = () => <UsersContainer/>

    const NewsComponent = () => <News props={props.news}/>;
    const MusicComponent = () => <Music props={props.music}/>;
    const SettingsComponent = () => <Settings props={props.settings}/>;


    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>

                <Route path="/dialogs" render={DialogsComponent}/>
                {/*<Route path="/dialogs" render={ () => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>*/}
                {/*<Route path="/profile" component={ProfileComponent}/>*/}
                {/*можно либо render либо component !!!*/}
                <Route path="/profile" render={ProfileComponent}/>

                <Route path="/users" render={UsersComponent}/>

                <Route path="/news" component={NewsComponent}/>
                <Route path="/music" component={MusicComponent}/>
                <Route path="/settings" component={SettingsComponent}/>
            </div>
        </div>
    );
}

export default App;
