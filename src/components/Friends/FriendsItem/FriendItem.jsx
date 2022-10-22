import React from 'react';
import {NavLink} from "react-router-dom";
import classes from "./../Friends.module.css"
const FriendItem = (props) =>{
    return(
        <div className={classes.item}>
            <NavLink to={"/friends/" + props.Friend.id}>{props.Friend.name}</NavLink>
        </div>
    )
}

export default FriendItem;