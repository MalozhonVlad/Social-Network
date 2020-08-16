import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => { // возвразает данние со стейта
    return {
        dialogsPage: state.dialogsPage
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
 * HOC
 * @type {RedirectComponent}
 */
let AuthRedirectComponent = withAuthRedirect(Dialogs);

/**
 *  в перевую функцию он закидивает стейт (mapStateToProps(state))
 *  во вторую закидивает store.dispatch.bind(store)
 */
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);


export default DialogsContainer;