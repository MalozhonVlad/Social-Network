import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

/**
 * контейнерная компонента(грязная!!!) ето клас !
 */
class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

/**
 * HOC
 * @type {RedirectComponent}
 */
let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {
    getUserProfile
})(WithUrlDataContainerComponent);