import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FriendNav from "./components/Navbar/FriendNav/FriendNav";





const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar element={<FriendNav friendItems={props.state.FriendsData}/>}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs/*' element=
                            {<Dialogs dialogs={props.state.MessagesPage.DialogsData}
                                      messages={props.state.MessagesPage.MessagesData}
                                      img={props.state.MessagesPage.DialogsData}
                            />}/>
                        <Route path='/profile' element=
                            {<Profile posts={props.state.ProfilePage.PostData}
                                      addPost={props.addPost}/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/friends' element=
                            {<Friends friends={props.state.FriendsData}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    )
}

export default App;