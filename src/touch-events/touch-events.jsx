import { useState } from "react"

export function TouchEvents(){
    const[msg,setMsg]=useState('');
    const[size,setSize]=useState({'width':50,'height':50});
    function handleTouch(){
        setMsg("RealMe 20% off on C33");
        setSize({'width':300,'height':400});
    //     setSize(prevSize=>({
    //         ...prevSize, 'width':300,'height':400
    //     }));
     }
    return(
        <div className="container-fluid">
            <img style={{transition:'2s',transform:'rotate(360deg)'}}src="images/image2.jpg" onTouchStart={handleTouch} width={size.width} height={size.height}alt=""/>
            <p>{msg}</p>
        </div>
    )
}