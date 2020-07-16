import React from "react";
import style from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return(
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
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem name="Vlad" id="1"/>
                <DialogItem name="Andrey" id="2"/>
                <DialogItem name="Sergey" id="3"/>
                <DialogItem name="Viktor" id="4"/>
            </div>
            <div className={style.messages}>
                <Message message="Hi"/>
                <Message message="How is your name"/>
                <Message message="Yo"/>
            </div>
        </div>
    );
}

export default Dialogs;