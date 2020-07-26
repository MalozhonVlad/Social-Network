const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Vlad'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sergey'},
        {id: 4, name: 'Viktor'},
        {id: 5, name: 'Valentin'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your name'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'This is the way'}
    ],
    newMessageBody: ""
};

const dialogsReducer = (state = initialState,action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return   {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return   {
                ...state,
                newMessageBody: '',
                /**
                 * копируем старий масив в новий (arrayCopy) + через кому добавляем еще 1 елемент в етот новий масив
                 */
                messages: [...state.messages, {id: 6, message: body}] // ... три точки означает что ми копируем старий обьект !!!
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE}) // возвращает обьект
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;