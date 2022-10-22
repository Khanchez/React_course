import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={classes.item}>
                <img src='https://st03.kakprosto.ru/images/article/2019/3/19/106096_5c906579b06855c906579b06bf.jpeg'></img>
                {props.message}
            </div>
            <div>
                <button>like</button>
                {props.likeCount}
            </div>
        </div>
    )
}

export default Post;
