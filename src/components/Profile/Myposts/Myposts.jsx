import React from 'react';
import Post from './Post/Post.jsx';
import classes from './Myposts.module.css'

const Myposts = (props) => {

    let PostElement =
        props.posts.map( p => <Post message={p.post} likeCount={p.LikesCount}/>)

    let newPostElement = React.createRef()

    let addPost = () =>{
        let text = newPostElement.current.value;
            props.addPost(text)
    }

    return (
        <div className={classes.postsBlock}>
            My Post
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {PostElement}
            </div>
        </div>
    )
}

export default Myposts;
