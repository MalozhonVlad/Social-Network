import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";

const Dialogs = (props) => {

    let dialogsElement = props.state.dialogs.map(
        dialog => (<DialogItem id={dialog.id} name={dialog.name}/>)
    ); // очень важное преобразование !!!! 25 video !!!

    let messagesElement = props.state.messages.map(
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