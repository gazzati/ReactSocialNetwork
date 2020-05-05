import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType} from "../../types/types";

type MapStatePropsType = {
    authorizedUserId: number | null
    profile: ProfileType | null
    status: string
    isAuth: boolean
}

type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (photo: any) => void
    saveProfile: (a: any) => void
}

type OwnPropsType = { }

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() { //общая часть didMount и didUpdate
        // @ts-ignore
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
                if(!userId) {
                    // @ts-ignore
                    this.props.history.push("/login")
                }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: any) {
        // @ts-ignore
        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }


    render() {
        return (
            <div>
                <Profile {...this.props}
                    // @ts-ignore
                         isOwner={!this.props.match.params.userId}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
                         savePhoto={this.props.savePhoto}
                         />
            </div>
        )
    }
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
})


export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
    (mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect)(ProfileContainer);