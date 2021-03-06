import React from "react";
import MyPost from "./post/MyPost";
import style from "./MyPosts.module.css"


const MyPosts = (props) => {

    let postsElement = props.postsData.map(
        post => (<MyPost id={post.id} message={post.message} likesCount={post.likesCount}/>)
    );

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {postsElement}
            </div>
        </div>
    );
}

export default MyPosts;