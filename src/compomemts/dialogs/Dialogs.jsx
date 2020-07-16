import React from "react";
import style from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog + ' ' + style.active}>
                    <NavLink to="/dialogs/1">Vlad</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/2">Andrey</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/3">Sergey</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/4">Viktor</NavLink>
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>Hi</div>
                <div className={style.message}>How is your name</div>
                <div className={style.message}>Yo</div>
            </div>
        </div>
    );
}

export default Dialogs;