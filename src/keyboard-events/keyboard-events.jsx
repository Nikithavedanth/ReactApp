import { useEffect, useState } from "react";
import axios from 'axios';

export function KeyboardEvents(){
    const [users,setUsers]=useState([{'UserName':'','Password':''}]);
    const [userMessage,setUserMessage] = useState('');
    const [errorClass,setErrorClass]=useState('');
    const [showToggle,setShowToggle]=useState({'display':'none'});
    function handleVerifyUserName(e){
        for(var user of  users){
            if(user.UserName===e.target.value){
                setUserMessage('UserName is Taken-Try another');
                setErrorClass('text-danger');
                break;
            }
            else{
                setUserMessage('UserName Available');
                setErrorClass('text-success');
            }
        }
    }
    function handlePasswordChange(e){
        if(e.which>=65&&e.which<=90){
            setShowToggle({'display':'block'});
        }
        else{
            setShowToggle({'display':'none'});
        }
    }
    useEffect(()=>{
        axios.get('users.json').then(response=>{
            setUsers(response.data);
        })

    },[])
    return(
        <div>
            <h2>Register User</h2>
            <dl className="w-25">
                <dt> UserName</dt>
                <dd><input type="text" onKeyUp={handleVerifyUserName} className="form-control"></input></dd>
                <dd className={errorClass}>{userMessage}</dd>
                <dt>Password</dt>
                <dd><input onKeyPress={handlePasswordChange}type="password"></input></dd>
                <dd style={showToggle}className="text-warning"><span className="bi bi-exclamation-triangle-fill"></span>warning:caps On</dd>
            </dl>
        </div>
    )
}