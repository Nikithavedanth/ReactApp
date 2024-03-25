import {useState} from "react";
export function StyleBinding(){
    const [validationStyle, setValidationStyle]=useState({border:'',boxShadow:''})
    function handleNameChange(e){
        if(e.target.value===''){
        setValidationStyle({
           border:'2px solid red',
           boxShadow:'2px 2px 2px red'
        })}
        else{
            setValidationStyle({
                border:'2px solid green',
                boxShadow:'2px 2px 2px green'
            })
        }
        
    }
    return(
    <div>
        <h2> User Name</h2>
        <dl>
            <dt> Username</dt>
            <dd><input type="text" style={validationStyle} onChange={handleNameChange} placeholder="Name Required"></input></dd>
        </dl>
    </div>)
}