export function FormEvents(){
    function handleSubmit(e){
        e.preventDefault();
        alert(JSON.stringify({'name':'john'}));
    }
    return(
        <div className="container-fluid">
            <form onSubmit ={handleSubmit} onReset={()=>{alert("Form will Reset")}}>
                <dl>
                    <dt>UserName</dt>
                    <dd><input type="text"name="UserName"></input></dd>
                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>
                </dl>

            </form>

        </div>
    )
}