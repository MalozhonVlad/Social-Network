import React from "react";
import MyPost from "./post/MyPost";

const MyPosts = (props) => {
    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
            </div>
            <MyPost message='Hi, how are you' likesCount='10'/>
            <MyPost message='My first post' likesCount='15'/>
        </div>
    );
}

export default MyPosts;