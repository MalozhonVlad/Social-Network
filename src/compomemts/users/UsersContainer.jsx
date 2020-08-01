import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setUsersTotalCountAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

/**
 * набор колбеков которие связивают компоненту и стейт !!!!
 * все функции которие есть в компоненту берутся от сюда через пропси
 * а тут они берутся из стейта !!!!
 */
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}

/**
 * по сути ета функция connect()() - ето и есть круговорот флакс одна фунция что передается
 * mapStateToProps - берет данние из стейта и отрисовивает и себя на фронте
 * mapDispatchToProps - закидивает данние в стейт
 * как только ми закидиваем с помощью mapDispatchToProps новие данние в стейт в реакте срабативает
 * обсервер которий говорит данние в стейте поменялись и потом визивает функцию mapStateToProps -
 * которая заново отрисовивает компоненту !!!!!
 */
export default connect(mapStateToProps,mapDispatchToProps)(Users);