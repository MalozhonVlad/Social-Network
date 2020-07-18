import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
    {id: 1, name: 'Vlad'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sergey'},
    {id: 4, name: 'Viktor'},
    {id: 5, name: 'Valentin'}
];

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your name'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'}
]

let postsData = [
    {id:1, message: 'Hi, how are you', likesCount: 10},
    {id:2, message: 'My first post', likesCount: 15},
    {id:3, message: 'Bla-bla-bla', likesCount: 25},
    {id:4, message: 'Coll react', likesCount: 35}
]

ReactDOM.render(<React.StrictMode><App dialogs={dialogs}
                                       messages={messages}
                                       postsData={postsData}/>

</React.StrictMode>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
