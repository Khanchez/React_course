import React from 'react';
import FriendItem from "./FriendsItem/FriendItem";
import classes from "./Friends.module.css"

const Friends = (props) =>{

    let FriendsList = props.friends
        .map( f => <FriendItem Friend={f}/>)
    return(
        <div className={classes.friend}>
            {FriendsList}
        </div>
    )
}


export default Friends