import { useState } from "react"

export function ClipboardEvents(){
    const [mobileFormat,setMobileFormat]=useState(/ /);
    const [toolTip,setToolTip]=useState('');
    const [yourMobile,setYourMobile]=useState('');
    const[errorMessage,setErrorMessage]=useState('');

    function handleMobileChange(e){
        setYourMobile(e.target.value);
    }
    function handleVerifyClick(){
        if(yourMobile.match(mobileFormat)){
            document.write("<h2>Registered Successfully...</h2>");
        }
        else{
            setErrorMessage(`Invalid Mobile ${toolTip}`);
        }
    }
    function handleCountryChange(e){
        switch(e.target.value){
            case "India":
                setMobileFormat(/\+91\d{10}/);
                setToolTip("India Mobile Format:+91 and 10 digits");
                break;
            case "US":
                setMobileFormat(/\+\(1\)\(\d{3}\)\S\d{3}-\d{4}/);
                setToolTip("US:+(1)(425)555-0100");
                break;
            case "UK":
                setMobileFormat(/\+\(44\)\(\d{2}\)\S\d{4}\S\d{4}/);
                setToolTip("UK:+(44)(20) 1234 5678");
                break;
            default: 
                setMobileFormat(/ /);
                setToolTip("Please Select your country");
                break;
        }
    }
    function handlePaste(e){
        // e.preventDefault()
        document.onpaste=function(){ 
            alert("you cannot paste");
            return false;
        }
    }
    return(
        <div className="container-fluid">
            <h3>Verify your Mobile</h3>
            <dl className="w-25">
                <dt>Select Country</dt>
                <dd>
                    <select onChange={handleCountryChange} className="form-select">
                        <option value="-1"> Select Your Country</option>
                        <option value="India"> India</option>
                        <option value="US"> US</option>
                        <option value="UK"> UK</option>
                    </select>
                </dd>
                <dt> Mobile</dt>
                <dd><input type='text' className="form-control" onChange={handleMobileChange} placeholder= {toolTip}/></dd>
                <dt>Verify Mobile</dt>
                <dd><input type="text" className="form-control" onPaste={handlePaste}></input></dd>
                <dd className="text-danger">{errorMessage}</dd>
                <button onClick={handleVerifyClick} className="btn btn-primary w-100">Verify</button>
                
                
            </dl>
        </div>
    )
}