import axios from 'axios';
import {useState,useEffect} from 'react';

export function NasaAPI(){
    const [marsObject,setMarsObject] = useState([]);
    useEffect(()=>{
        axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')
        .then(response=>{
            setMarsObject(response.data.photos);
        },[]);
})
    return(
        <div className='container-fluid'>
            <main className='d-flex flex-wrap overflow-auto'style={{height:'500px'}}>
                {
                    marsObject.map(items=>{
                     <div key={items.id} className="car m-2 p-2" style={{width:'200px'}}>
                        <img src={items.img_src} className='card-img-top' height='150px' alt=''/>
                        <div className='card-header'> 
                            {items.id}
                        </div>
                        <div className='card-body'>
                            <dl>
                                <dt> Camera Name</dt>
                                <dd>{items.camera.full_name}</dd>
                                <dt>Rover Name</dt>
                                <dd>{items.rover.name}</dd>
                            </dl>
                        </div>

                     </div>   
                     return marsObject
                    })
                }
            </main>


        </div>
    )
}