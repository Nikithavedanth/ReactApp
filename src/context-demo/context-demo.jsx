import { useContext, useState } from "react";
import { createContext } from "react";
let userDetailsContext=createContext(null);

export function VideoComponent(){
    const context=useContext(userDetailsContext);
    return(
        <div className="bg-danger p-4">
            <h5>Video Component-{context.UserName}</h5>
        </div>
    )
}
export function HomeComponent(){
    const context=useContext(userDetailsContext);
    return(
        <div className="bg-warning p-4">
            <h5>Home Component-{context.UserName} </h5>
            <VideoComponent/>
        </div>
    )
}
export function ContextDemo(){
    const[userName,setUserName]=useState();
    function handleNameChange(e){
        setUserName(e.target.value);
    }
    return(
        <div className="container-fluid p-4 m-2 bg-dark text-white">
            <userDetailsContext.Provider value={{UserName:userName}}>
                <h2>Index Component</h2>
                <div className="md-4">
                    UserName <input type="text" onChange={handleNameChange}/>
                </div>
                <HomeComponent/>
            </userDetailsContext.Provider>
        </div>
    )
}