export function UserLogin(props){
    return(
        <div className="container-fluid">
            <h3><span className="bi bi-person-fill"></span> User Login</h3>
            <dl className="w-25">
                <dt>{props.UserLabel}</dt>
                <dd><input type={props.UserType} className="form-control"></input></dd>
                <dt> Password</dt>
                <dd><input type="password" className="form-control"></input></dd>
                <button className="btn btn-primary w-100">{props.ButtonText}</button>
            </dl>

        </div>
    )
}