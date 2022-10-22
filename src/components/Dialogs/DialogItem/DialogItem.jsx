import React from 'react';
import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) =>{
    return(
        <div>
            <NavLink to={"/dialogs/" + props.id} className={classes.dialogsItems}><img src={props.img}/>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;
