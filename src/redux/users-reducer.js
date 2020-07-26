const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        // {id: 1, photoUrl: 'https://i.pinimg.com/236x/8a/05/33/8a053319bd263f33acaccd922f55e451.jpg',followed: false, fullName: 'Dmitriy', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'} },
        // {id: 2, photoUrl: 'https://i.pinimg.com/236x/8a/05/33/8a053319bd263f33acaccd922f55e451.jpg',followed: true, fullName: 'Vlad', status: 'I am a boss too', location: {city: 'Moscov', country: 'Russia'} },
        // {id: 3, photoUrl: 'https://i.pinimg.com/236x/8a/05/33/8a053319bd263f33acaccd922f55e451.jpg',followed: false, fullName: 'Andrey', status: 'I am a boss too', location: {city: 'Kiev', country: 'Ukraine'} },
        // {id: 4, photoUrl: 'https://i.pinimg.com/236x/8a/05/33/8a053319bd263f33acaccd922f55e451.jpg',followed: true, fullName: 'Valera', status: 'From USA', location: {city: 'New York', country: 'USA'} }
    ]
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
        return  {
            ...state,
            users: state.users.map(u => {
                if (u.id === action.userId) {
                    return {...u, followed: true}
                }
                return u;
            })
        }
        case UNFOLLOW:
            return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: [ ...state.users, ...action.users ]}
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})


export default usersReducer;