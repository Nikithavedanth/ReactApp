import {useState,useEffect} from 'react';
export function Login(){
    useEffect(()=>{
        alert('Login Component mounted');
    },[])
    return(
        <div>
            <h2> UserLogin</h2>
            <dl>
                <dt>UserName</dt>
                <dd><input type="text"/></dd>
            </dl>
        </div>
    )
}
export function Register(){
    useEffect(()=>{
        alert('Register Component mounted');
    },[])
    return(
        <div>
            <h2> Register New User</h2>
            {/* <dl>
                <dt>UserName</dt>
                <dd><input type="text"/></dd>
            </dl> */}
        </div>
    )
}


export function LifeCycle(){
    const[template,setTemplate]=useState('');
    function LoginClick(){
        setTemplate(<Login/>)
    }
    function RegisterClick(){
        setTemplate(<Register/>)
    }
    return(
        <div className='container-fluid'>
            <h3> Mount Demo</h3>
            <button onClick={LoginClick}>Login</button>
            <button onClick={RegisterClick}>Register</button>
            <hr/>
            <div>{template}</div>
        </div>
    )
}