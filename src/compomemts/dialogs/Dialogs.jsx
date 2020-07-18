import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Vlad'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sergey'},
        {id: 4, name: 'Viktor'},
        {id: 5, name: 'Valentin'}
    ];

    let dialogsElement = dialogs.map(
        dialog => (<DialogItem id={dialog.id} name={dialog.name}/>)
    ); // очень важное преобразование !!!! 25 video !!!

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your name'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ]

    let messagesElement = messages.map(
      message => (<Message id={message.id}  message={message.message}/>)
    ); // очеь важно !!!

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={style.messages}>
                {messagesElement}
            </div>
        </div>
    );
}

export default Dialogs;