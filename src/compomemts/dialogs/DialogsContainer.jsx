import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => { // возвразает данние со стейта
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => { // возвращает колбеки что нужни
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        }

    }
}

/**
 *  в перевую функцию он закидивает стейт (mapStateToProps(state))
 *  во вторую закидивает store.dispatch.bind(store)
 */
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;