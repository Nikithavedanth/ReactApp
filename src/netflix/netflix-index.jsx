import { NetflixHeader } from './netflix-header';
import './netflix-index.css';
import './netflix-index.css'
import { NetflixMain } from './netflix-main';
export function NetflixIndex(){
    return(
        <div className="bg-image"> 
            <div className="bg-shade">
            <NetflixHeader/>  
            <NetflixMain/>
            </div>
               
        </div>
    )
}