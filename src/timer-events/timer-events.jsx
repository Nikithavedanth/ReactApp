import { useState } from "react"
export function Bounce(){
    //SetInterval and clearInterval
    // const[msg,setMsg]=useState(new Date());
    // function clock(){
    //     setMsg(new Date());
    // }
    // useEffect(()=>{
    //     setInterval(clock,1000);
    // },[])


    //SetTimeout and clearTimeout
    // const [msg,setMsg]=useState('');
    // function Msg1(){
    //     setMsg("Hello!");
    // }
    // function Msg2(){
    //     setMsg('How are you?');
    // }
    // function Msg3(){
    //     setMsg('Welcome to React');
    // }
    // var m1,m2,m3;
    // useEffect(()=>{
    //   m1=setTimeout(Msg1,3000);
    //   m2=setTimeout(Msg2,5000);
    //   m3=setTimeout(Msg3,10000);  
    // },[])
    // function handleCancelClick(){
    //     clearTimeout(m2);
        
    // }

    const [loadingContainer,setLoadContainer]=useState({'display':'none'});
    const [imageContainer,setImageContainer]=useState({'display':'none'});
    const [btnContainer,setBtnContainer]=useState({'display':'block'});
    const [count,setCount]=useState(0);
    var i=0;
    function LoadingStatus(){
        i++;
        setCount(i);
        // setLoadContainer({'display':'block'});
        if(i===100){
            setLoadContainer({'display':'none'});
            setImageContainer({'display':'block'});
        }
        
    }
    function handleLoadClick(){
        setInterval(LoadingStatus,200);
        setBtnContainer({'display':'none'});
        setLoadContainer({'display':'block'})
    }
    return(
         <div className="container-fluid">
            <div className="d-flex justify-content-center align-items-center" style={{height:'500px'}}>
                <div style={btnContainer}>
                    <button onClick={handleLoadClick}className="btn btn-primary">LoadImage</button>
                </div>
                <div style={loadingContainer} className="text-center">
                    <div className="spinner-border"><br/> </div>
                    <p>Loading {count}%</p>
                </div>
                    
                <div style={imageContainer}>
                    <img src="images/image1.jpg" width="200" height="300"alt=""/>
                    
                </div>
            </div>
            {/* // <p className="text-center h3 mt-3">{msg.toLocaleTimeString()}</p> */}
            {/* <button onClick={handleCancelClick}>Cancel Msg2</button>
            // <p className="text-center h3 mt-3">{msg}</p> */}

         </div>
    )
}