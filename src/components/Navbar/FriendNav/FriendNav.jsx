import React from 'react';
import FriendNavInfo from "./FriendNavInfo/FriendNavInfo";


const FriendNav = (props) => {/*
    let friendsArr = props.friendItems
    let componentsArr = [];
    for(let i = 0; i < friendsArr.length; i++){
        componentsArr[i] = Transform(friendsArr[i])
    }*/

let borders = props.friendItems.slice(0, 3)

    let Infos = borders.map(f=><FriendNavInfo imgAva={f.imgAva} name={f.name}/>)
    return(
        <div>
            {Infos}
        </div>
    )
}
/*const Transform = function(friend){
    return(
        <FriendNavInfo imgAva={friend.imgAva} name={friend.name}/>
    )
}*/

export default FriendNav;
