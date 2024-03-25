import { useState } from "react";
// import './mouse-events.css'
export function MouseEvents(){
    // const [imgSrc,setImgSrc]=useState('images/image1.jpg');
    // function handleMouseOverImage(e){
    //     setImgSrc(e.target.src);
    // }
    const[styleObject,setStyleObject]=useState({"position":'',"top":'',"left":''})

    function handleMouseMove(e){
        setStyleObject({"position":"fixed","top":e.clientY+"px","left":e.clientX+"px"})
    }           
    return(
        // onMouseOver
        <div  onMouseMove={handleMouseMove} className="container-fluid">
            {/* <section className="mt-4 row">
                <nav className="col-2">
                    <div className="mb-4">
                        <img onMouseOver={handleMouseOverImage} src='images/image1.jpg'alt='' width='50' height='50'/>
                    </div>
                    <div className="mb-4">
                        <img onMouseOver={handleMouseOverImage} src='images/image2.jpg'alt='' width='50' height='50'/>
                    </div>
                    <div className="mb-4">
                        <img onMouseOver={handleMouseOverImage} src='images/image3.jpg'alt='' width='50' height='50'/>
                    </div>
                    <div className="mb-4">
                        <img onMouseOver={handleMouseOverImage} src='images/image4.jpg'alt='' width='50' height='50'/>
                    </div>
                    <div className="mb-4">
                        <img onMouseOver={handleMouseOverImage} src='images/image5.jpg'alt='' width='50' height='50'/>
                    </div>
                </nav>
                <main className="col-10"> 
                <img src ={imgSrc} height="400" width="400" alt=""/>
                </main>
            </section> */}

            {/* onMouseOut and onMouseOver */}
            {/* <div  className="mt-4">
                <marquee  onMouseOut={(e)=>{e.target.start()}}  onMouseOver={(e)=>(e.target.stop())} scrollamount ="10">
                    <img className="me-4"src ="images/image1.jpg" width="100" height="100" alt=''/>
                    <img className="me-4"src ="images/image2.jpg" width="100" height="100" alt=''/>
                    <img className="me-4"src ="images/image3.jpg" width="100" height="100" alt=''/>
                    <img className="me-4"src ="images/image4.jpg" width="100" height="100" alt=''/>
                    <img className="me-4"src ="images/image5.jpg" width="100" height="100" alt=''/>
                </marquee>
            </div> */}
            {/* onMouseMove */}
            

            <div className="mt-4" style={{height:'1000px'}}>
                <p>move mouse pointer to test</p>
            </div>
            <img style={styleObject}src="images/image6.gif" width="50" height="50" alt=""/>
        </div>
    )
}