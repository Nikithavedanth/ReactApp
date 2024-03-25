// import{useState} from 'react';
export function ButtonEvents(){
    function handleImageClick(){
        window.open('images/image1.jpg','Mobile','width=300 height=400');
    }
    function handleRightClick(){
        document.onContextMenu=function(){
            alert('Right-Click disabled');
            return false;
        }
    }
    // const [img,setImg]=useState({'display':'none'});
    
    
    // function handlePlay(){
    //     setImg({'display':'block'}); 
    // } 
    // function handlePause(){
    //     clearTimeout(handlePlay());
        // }
    return(
        // <div className="container-fluid" onContextMenu={()=>{alert('Right Click Disabled'); return false;}}>
        <div className="container-fluid" onContextMenu={handleRightClick}>
            <img onDoubleClick={handleImageClick} src='images/image1.jpg' width="100"height="100" alt=''/>
            <p>Double Click to View Large</p>
        </div>
        // <div className="container-fluid justify-content-center d-flex mt-5">
        //     <span><button className="btn btn-primary">Play</button>
        //     <button className="btn btn-warning">Pause</button></span>
            
        // </div>
    )
}