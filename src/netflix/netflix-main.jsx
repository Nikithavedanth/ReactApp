import './netflix-main.css'
import { NetflixRegister } from './netflix-register'
export function NetflixMain(){
    return(
        <div className="text-white" ms-4 mt-4 w-50>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h3>Watch anywhere, Cancel anytime.</h3>
            <NetflixRegister/>
        </div>
    )
}