import React from "react";
import style from './Profile.module.css'

const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img
                    src='https://www.robertwalters.com.hk/content/dam/robert-walters/global/images/article-images/digital-neon.jpg'/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={style.posts}>
                    <div className={style.item}>
                        post 1
                    </div>
                    <div className={style.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;