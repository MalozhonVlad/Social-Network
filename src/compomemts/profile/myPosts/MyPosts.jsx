import React from "react";
import MyPost from "./post/MyPost";
import style from "./MyPosts.module.css"

const MyPosts = (props) => {

    let postsData = [
        {id:1, message: 'Hi, how are you', likesCount: 10},
        {id:2, message: 'My first post', likesCount: 15}
    ]

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
                <MyPost message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                <MyPost message={postsData[1].message} likesCount={postsData[1].likesCount}/>
            </div>
        </div>
    );
}

export default MyPosts;