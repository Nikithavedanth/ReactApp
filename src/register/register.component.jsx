import React from 'react';
import "./register.component.css";
export function RegisterComponent(){
    return(
        <div class="container">
        <React.Fragment>
        <form className="w-25 mt-3 border border-2 border primary p-3 rounded rounded-3">
        <dl>
            <dt ><span class="bi bi-person-fill">Register User</span></dt>
            <dd className="form-control"><input type="text"></input></dd>
            <dt >password</dt>
            <dd className="form-control"><input type="password"></input></dd>
            <dt >email</dt>
            <dd className="form-control"><input type="email"></input></dd>
        </dl>
        <button className="btn btn-primary w-100">Register</button>
        </form>
        </React.Fragment>
        </div>
    )
}