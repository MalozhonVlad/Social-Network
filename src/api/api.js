import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "api-key": "2a515b19-5a52-4bab-a3fc-034b49d5cb8c"
    }
});

/**
 * все запроси на бек делаем тут !!!
 * потом только визиваем етот обьект !!!!
 * @type {{getUsers(*=, *=): *, getProfile(*): AxiosPromise<any>, follow(*): *, unfollow(*): *}}
 */
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}




export const getUsers2 = (currentPage = 1, pageSize = 10) => {
    return instance.get(`follow?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        })
}