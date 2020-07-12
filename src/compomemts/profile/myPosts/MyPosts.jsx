import React from "react";
import MyPost from "./post/MyPost";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
            </div>
            <MyPost/>
            <MyPost/>
        </div>
    );
}

export default MyPosts;