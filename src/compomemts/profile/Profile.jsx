import React from "react";
import style from './Profile.module.css'
import MyPosts from "./myPosts/MyPosts";

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
           <MyPosts />
        </div>
    );
}

export default Profile;