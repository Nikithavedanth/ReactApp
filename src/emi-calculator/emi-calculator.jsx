import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function EMICalculator(){
    const[amount,setAmount] =useState(10000);
    const[year,setYear]=useState(1);
    const[rate,setRate]=useState(10.45);
    const[emi,setEmi]= useState(0);
    const navigate=useNavigate();
    function handleClick(){
        navigate("/css");
    }
    function handleAmountChange(e){
        setAmount(e.target.value);
    }
    function handleRateChange(e){
        setRate(e.target.value);
    }
    function handleYearChange(e){
        setYear(e.target.value);
    }
    function handleCalculateClick(e){
        var p=amount;
        var r=rate/12/100;
        var n=year*12/100;
        var emi=p*r*Math.pow(1+r,n)/Math.pow(1+r,n)-1
        setEmi(emi);
    }
    return(
        <div className="container-fluid">
            <button onClick={handleClick}>Home</button>
            <h3>EMI Calculator</h3>
            <div className="border border-dark p-4">
                <div className="row mb-2">
                    <div className="col">
                        Amount you need &#8377; <input type="text" value={amount}/>
                    </div>
                    <div className="col">
                        for <input type="text" size='2' value={year}/>years
                    </div>
                    <div className="col">
                        Interest Rate <input type="text" size='4' value={rate}/>%
                    </div>
                    <div className="row mt-4 mb-4">
                        <div className="col">
                            <div className="input-group">
                                <span className="input-group-text">&#8377; 10,000</span>
                                <input style={{width:'200px'}} min='10000' max='1000000' value={amount} type="range" className="form-range" onChange={handleAmountChange}/><span className="input-group-text">&#8377; 10,00,000</span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="input-group">
                                <span className="input-group-text">1</span>
                                <input style={{width:'200px'}} min='1' max='5' value={year} type="range" className="form-range" onChange={handleYearChange}/><span className="input-group-text">5</span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="input-group">
                                <span className="input-group-text">10.45</span>
                                <input style={{width:'200px'}} min='10.45' max='18.45' value={rate} type="range" className="form-range" onChange={handleRateChange}/><span className="input-group-text">18.45</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                        <div className="col text-end">
                            <button onClick={handleCalculateClick} className="btn btn-primary">Calculate</button>
                        </div>
                        <p className="text-center"> Your Monthly Installment Amount is <b>&#8377; {Math.round(emi)}</b></p>
                    </div>
        </div>
    )
}