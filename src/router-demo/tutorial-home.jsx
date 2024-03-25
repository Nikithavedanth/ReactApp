import { useState } from "react";
import { BrowserRouter, Link,Routes,Route } from "react-router-dom";
import {EMICalculator} from '../emi-calculator/emi-calculator';
import {Shopper} from "../shopper/shopper";

export function TutorialExample(){
    const[access]=useState(new Date());
 
    return(
        <div>
            <h3>Tutorial Home</h3>
            <p>Page Last Fetched on:{access.toLocaleTimeString()}</p>
            <BrowserRouter>
                 <nav>
                    <Link to="/">Home</Link>|
                    <Link to="html">HTML</Link>|
                    <Link to ="css">CSS</Link>|
                    <Link to ="shop">Login</Link>|
                    <Link to ="Emi">EMI</Link>
                    {/* <button onClick={handleClick} className="btn btn-primary">CSS</button> */}
                 </nav>
                     <Routes>
                        <Route path="html" element={
                            <div>
                                <h5>It is markup language</h5>
                            </div>
                        }/>
                        <Route path="css" element={
                            <div>
                                <h5>It defines styles to html</h5>
                            </div>
                        }/>
                        <Route path="emi" element={<EMICalculator/>}/>
                        <Route path ="shop" element={<Shopper/>}/>
                        <Route path="/" element={
                            <div>
                                <h5>It is main page</h5>
                            </div>
                        }/>
                        <Route path="*" element={
                            <div>
                                <h5>No page found</h5>
                            </div>
                        }/>
                     </Routes>
            </BrowserRouter>
        </div>
    )
}