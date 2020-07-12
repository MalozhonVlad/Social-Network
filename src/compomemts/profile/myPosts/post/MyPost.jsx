import style from "./MyPost.module.css";
import React from "react";

const MyPost = () => {
    return (
        <div className={style.posts}>
            <div className={style.item}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU'/>
                post
                <div>
                    <span>like</span>
                </div>
            </div>
        </div>
    );
}

export default MyPost;