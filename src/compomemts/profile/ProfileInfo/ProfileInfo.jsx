import React from "react";
import style from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img
                    src='https://www.robertwalters.com.hk/content/dam/robert-walters/global/images/article-images/digital-neon.jpg'/>
            </div>
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;