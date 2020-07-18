import React from "react";
import MyPost from "./post/MyPost";
import style from "./MyPosts.module.css"

const MyPosts = (props) => {

    let postsData = [
        {id:1, message: 'Hi, how are you', likesCount: 10},
        {id:2, message: 'My first post', likesCount: 15},
        {id:3, message: 'Bla-bla-bla', likesCount: 25},
        {id:4, message: 'Coll react', likesCount: 35}
    ]

    let postsElement = postsData.map(
      post => (<MyPost id={post.id} message={post.message} likesCount={post.likesCount}/>)
    );

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
                {postsElement}
            </div>
        </div>
    );
}

export default MyPosts;