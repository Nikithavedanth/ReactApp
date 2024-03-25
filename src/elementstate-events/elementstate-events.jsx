import{useState} from 'react';
export function ElementStateEvents(){
    const[warn,setWarn]=useState('');
    const[userName,setUserName]=useState('');
    function handleFocus(e){
        setWarn("Name in Block letters Only..");
    }
    function handleBlur(e){
        setWarn('');
        setUserName(userName.toUpperCase());
    }
    function handleUserChange(e){
        setUserName(e.target.value);
    }
    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <dl>
                <dt>UserName</dt>
                <dd><input type='text' value={userName} onChange={handleUserChange} onFocus={handleFocus} onBlur={handleBlur}></input></dd>
                <dd>{warn}</dd>
            </dl>
        </div>
    )
}