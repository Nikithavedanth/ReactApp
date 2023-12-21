export function NetflixRegister(){
    return(
        <div>
            <p className="text-white"> Ready to watch?Enter your mail</p>
            <div className="input-group input-group-lg">
                <input type="email" className="form-control" placeholder="your email address"/>
                <button className="btn btn-danger ms-2">Get Started<span className="bi bi-chevron-right me-2"></span></button>
            </div>
        </div>
    )
}