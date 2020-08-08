const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    usersId: null,
    email: null,
    login: null,
    isAuth: false
};

/**
 * все что меняется в стейте ми меняем через редюсер !!!!!
 * state - текущий стейт приложения
 * action - обьект в которем минимум есть тайп(type), еще могут бить елементи которие ми
 * вставляем и передаем в стейт action={type: SET_CURRENT_PAGE, currentPage:currentPage и т.д.}
 */
const authReducer = (state = initialState, action) => {

    switch (action.type) {
        // ...state - старий стейт копируем но вставляем туда новую инфу из action напр. action.userId из
        // за етого он перересовивает стейт (появляется новий елемент в стейте и ми перерисовиваем !!!)
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

/**
 * тут создаются екшн криейтери !!!!
 */
export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})

export default authReducer;