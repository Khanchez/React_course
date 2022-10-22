import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";






const Dialogs = (props) =>{



    let dialogsElements = props.dialogs
        .map( d => <DialogItem img={d.img} name={d.name} id={d.id}/>)


    let MessagesElements = props.messages
        .map( m => <Message message={m.message}/>)

    let messageItem = React.createRef();

let ButtonForMessage = () =>{
       let MessageData = messageItem.current.value;
       alert(MessageData)
}

   return(

        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                 {dialogsElements}
            </div>
            <div className={classes.messages}>
                {MessagesElements}
            </div>
            <div className={classes.addMessage}>
                <textarea ref={messageItem}></textarea>
                <button onClick={ButtonForMessage} className={classes.button}>Отправить</button>
            </div>
        </div>

    )
}

export default Dialogs;
