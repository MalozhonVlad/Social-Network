import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {

    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi, how are you', likesCount: 10},
                {id: 2, message: 'My first post', likesCount: 15},
                {id: 3, message: 'Bla-bla-bla', likesCount: 25},
                {id: 4, message: 'Call react', likesCount: 35}
            ],
            newPostText: 'it-kamasutra'
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State was changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; // паттерн observer
    },

    dispatch(action) { // { type: 'ADD-POST' }
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.state = store;