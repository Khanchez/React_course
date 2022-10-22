import React from "react";
import classes from './FriendNavInfo.module.css'
const FriendNavInfo = (props) =>{
    return(
        <div className={classes.friend}>
            <img src={props.imgAva}/>
            {props.name}
        </div>
    )
}

export default FriendNavInfo;