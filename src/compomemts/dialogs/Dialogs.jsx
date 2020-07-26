import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElement = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>); // очень важное преобразование !!!! 25 video !!!
    let messagesElement = state.messages.map(message => <Message message={message.message} key={message.id}/>); // очеь важно !!!
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={style.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                                  onChange={onNewMessageChange}
                                  placeholder='Enter your message'></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Add post</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;