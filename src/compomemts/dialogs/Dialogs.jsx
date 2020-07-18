import React from "react";
import style from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={style.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Vlad'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sergey'},
        {id: 4, name: 'Viktor'},
        {id: 5, name: 'Valentin'}
    ];

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your name'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'}
    ]

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name="Sergey" id="3"/>
                <DialogItem name="Viktor" id="4"/>
            </div>
            <div className={style.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message="Yo"/>
                <Message message="Yo"/>
                <Message message="Yo"/>
            </div>
        </div>
    );
}

export default Dialogs;