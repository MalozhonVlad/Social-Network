import React from "react";
import style from "./Dialogs.module.css";

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog + ' ' + style.active}>
                    Vlad
                </div>
                <div className={style.dialog}>
                    Andrey
                </div>
                <div className={style.dialog}>
                    Sergey
                </div>
                <div className={style.dialog}>
                    Viktor
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