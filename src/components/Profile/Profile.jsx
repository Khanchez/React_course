import React from 'react';
import classes from './Profile.module.css';
import Myposts from './Myposts/Myposts.jsx'
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

  return <div className={classes.content}>

    <ProfileInfo/>
    <Myposts posts={props.posts} addPost={props.addPost}/>
  </div>
}

export default Profile;
