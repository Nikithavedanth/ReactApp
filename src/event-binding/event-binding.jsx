export function EventDemo(){
    //Inline event binding
    // function handleClick(e){
    //     alert(e.target.id);
    // }



    // function databaseOperations(e){
    //     switch(e.target.id){
    //         case "Insert": document.write('Record Inserted'); break;
    //         case "Update": alert('Record Updated..');break;
    //         case 'Delete': alert('Record Deleted Successfully..');break;
    //         default: alert('Nothing to be done..')
    //     }
    // }


    // function handleClick(e){
    //     alert(`Hello Clicked \n ${e.clientX}`);
    // }


    function handleClick(e,msg){
        alert(`X=${e.clientX}\n ${msg}`);
    }
    
    return(
        <div className="container-fluid">
            {/* <h2>Inline Events</h2> */}
            {/* <button onClick={alert("React")}> Hello</button> */}
            {/* <button onClick={function(){alert("React")}}>Hello</button> */}
            {/* <button onClick={()=>{alert("React")}}>Hello</button> */}
            {/* <button onClick={()=>alert("React")}>Hello</button> */}
            {/* <button onClick={(event)=> alert(event.clientX)}>Hello</button> */}
            {/* <button id='btnHello'onClick={(event)=>alert(`x=${event.clientX}\n y=${event.clientY}\n Id=${event.target.id}`)}>Hello</button> */}
            {/* <button onMouseOver={(e)=>{alert('Mouse is over');e.stopPropagation()}} id="btInsert" onClick={(e,msg)=>alert(`${e.target.id} \n ${e.clientX} \n${e.clientY}\n ${msg}`)}>Hello</button> */}
            {/* <form onSubmit={(e)=>{alert('Form Submitted');e.preventDefault()}}>
                <input placeholder="UserName" type="text" name="UserName"/>
                <button>Submit</button>
            </form> */}
            {/* <div className="bg-dark p-4 text-white"onClick={()=>alert('Div Clicked')}>
                <button onClick={(e)=>{alert('Home Clicked');e.stopPropagation()}}></button>
            </div> */}


            {/* //Embedded event binding */}
            {/* <h2>Embedded Events</h2>
            <button id="btnInsert" onClick={handleClick}>Hello</button> */}


            {/* <button onClick={databaseOperations}id='Insert'>Insert</button>
            <button onClick={databaseOperations}id='Update'>Update</button>
            <button onClick={databaseOperations}id='Delete'>Delete</button> */}


            {/* <button onClick={(e)=>handleClick(e)}>Hello</button> */}


            <button onClick={(e)=>handleClick(e,'welcome to events')}>Hello</button>
        </div>
    )
}