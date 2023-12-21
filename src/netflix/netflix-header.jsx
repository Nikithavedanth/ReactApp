export function NetflixHeader(){
    return(
        <header className="d-flex p-3 justify-content-between">
            <div >
                <h1 className="text-danger"> NETFLIX</h1>
            </div>
            <div className="d-flex">
                <div className="input-group">
                    <select className="form-select me-3">
                        <option>Language</option>
                    </select>
                    <button className="btn btn-danger">Sign in</button>
                </div>

            </div>
        </header>
    )
}