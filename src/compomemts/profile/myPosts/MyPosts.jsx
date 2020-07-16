import React from "react";
import MyPost from "./post/MyPost";
import style from "./MyPosts.module.css"

const MyPosts = (props) => {
    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                <MyPost message='Hi, how are you' likesCount='10'/>
                <MyPost message='My first post' likesCount='15'/>
            </div>
        </div>
    );
}

export default MyPosts;