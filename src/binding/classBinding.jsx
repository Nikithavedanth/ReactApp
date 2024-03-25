import { useState } from "react"
import './classBinding.css';

// with Bootstrap
// export function ClassBinding(){
//     const [theme,setTheme] =useState('');
//     function handleThemeChange(e){
//         if(e.target.checked){
//             setTheme('bg-dark text-white p-4');
//         }
//         else{
//             setTheme('');
//         }
//     }
//     return(
//         <div className="container-fluid  d-flex justify-content-center align-items-center" style={{height:'500px'}}>
//             <div className="form-switch">
//                 <div>
//                     <form className={theme}>
//                         <dl>
//                             <input type ="checkbox" className="form-check-input"onChange={handleThemeChange}/> Dark Theme
//                             <h3> Register User</h3>
//                             <dt>UserName</dt>
//                             <dd><input type="text" className="form-control"></input></dd>
//                             <dt>Password</dt>
//                             <dd><input type="password" className="form-control"></input></dd>
//                             <button className="btn btn-dark w-100">Register</button>
    
//                         </dl>
//                     </form> 
//                 </div>
//             </div>
//         </div>
//     )
// }
// Without Bootstrap custom class
export function ClassBinding(){
    const [theme,setTheme] =useState('light-theme');
    function handleThemeChange(e){
        if(e.target.checked){
            setTheme('dark-theme');
        }
        else{
            setTheme('light-theme');
        }
    }
    return(
        <div className="container-fluid  d-flex justify-content-center align-items-center" style={{height:'500px'}}>
            
                <div>
                    <form className={theme}>
                        <dl>
                            <div className="form-switch">
                               <input type ="checkbox" className="form-check-input"onChange={handleThemeChange}/> Dark Theme
                               <h3> Register User</h3>
                               <dt>UserName</dt>
                               <dd><input type="text" className="form-control"></input></dd>
                               <dt>Password</dt>
                               <dd><input type="password" className="form-control"></input></dd>
                               <button className="btn btn-dark w-100">Register</button>
                            </div>
                        </dl>
                    </form> 
                </div>
            
        </div>
    )
}
