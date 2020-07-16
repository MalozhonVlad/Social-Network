import React from "react";
import style from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://www.robertwalters.com.hk/content/dam/robert-walters/global/images/article-images/digital-neon.jpg'/>
            </div>
            <div className={style.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;