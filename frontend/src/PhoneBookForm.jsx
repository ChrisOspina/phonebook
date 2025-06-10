import React, { useState } from "react";
import Notification from "./Notification";
import style from "./style";

function PhoneBookForm(props){

    const initContact ={
        id: null,
        userFirstname: "John",
        userLastname: "Doe",
        userPhone: "8885559999",
    }

    const [userState, setUserState] = useState(initContact);
    const [notification, setNotification] = useState('');
    const [notificationType, setNotificationType] = useState('');

    const handleUserChange = (e) =>{
        setUserState({
        ...userState,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (!userState.userFirstname || !userState.userLastname || !userState.userPhone) 
            return;
        props.addUser(userState);
        setUserState(initContact);
        showNotification(`Added ${userState.userFirstname} ${userState.userLastname}`);
    }

      
  const showNotification = (message, type = 'success') => {
    setNotification(message);
    setNotificationType(type);
    setTimeout(() => setNotification(''), 3000);
  };

    return(
        <div>
            <Notification message={notification} type={notificationType}/>
            <form onSubmit={handleSubmit} style={style.form.container}>
            <label>First name:</label>
            <br />
            <input style={style.form.inputs} className="userFirstname" name="userFirstname" type="text" value={userState.userFirstname} onChange={handleUserChange} />
            <br />
            <label>Last name:</label>
            <br />
            <input style={style.form.inputs} className="userLastname" name="userLastname" type="text" value={userState.userLastname} onChange={handleUserChange} />
            <br />
            <label>Phone:</label>
            <br />
            <input style={style.form.inputs} className="userPhone" name="userPhone" type="text" value={userState.userPhone} onChange={handleUserChange} />
            <br />
            <input style={style.form.submitBtn} className="submitButton" type="submit" value="Add User" />
            </form>
        </div>
    );
}
export default PhoneBookForm