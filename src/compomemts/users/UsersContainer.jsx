import React from "react";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    toggleIsFetchingAC,
    unfollowAC
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";

class UsersContainer extends React.Component {

    /**
     * жизнений цикл компоненти !!! типа как в спринге жизнений цикл бина !!!
     * етот метод визивается когда создается етот обьект и в ето время идет запрос на сервер !!!
     */
    componentDidMount() {
        this.props.toggleIsFetchingAC(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetchingAC(false);
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetchingAC(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetchingAC(false);
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
            />
        </>
    }
}

/**
 * тут берутся данние из стейта и прокидиваются в компоненту !!!!
 * круговорот флакс !!!
 */
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        },
        toggleIsFetchingAC: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
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
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);