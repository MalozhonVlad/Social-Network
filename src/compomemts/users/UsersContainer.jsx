import React from "react";
import {connect} from "react-redux";
import {follow, getUsers, setCurrentPage, toggleFollowingProgress, unfollow} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class UsersContainer extends React.Component {

    /**
     * жизнений цикл компоненти !!! типа как в спринге жизнений цикл бина !!!
     * етот метод визивается когда создается етот обьект и в ето время идет запрос на сервер !!!
     */
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

let withRedirect = withAuthRedirect(UsersContainer);

/**
 * по сути ета функция connect()() - ето и есть круговорот флакс одна фунция что передается
 * mapStateToProps - берет данние из стейта и отрисовивает и себя на фронте
 * mapDispatchToProps - закидивает данние в стейт
 * как только ми закидиваем с помощью mapDispatchToProps новие данние в стейт в реакте срабативает
 * обсервер которий говорит данние в стейте поменялись и потом визивает функцию mapStateToProps -
 * которая заново отрисовивает компоненту !!!!!
 */
// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

/**
 * зделали рефакторинг !!!!
 */
export default withAuthRedirect(connect(mapStateToProps,
    {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers
    }
)(UsersContainer));