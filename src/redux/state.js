import {rerenderEntireTree} from "../render";

let state = {
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
        ]
    }
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export default state;