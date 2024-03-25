import axios from 'axios';
import {useState,useEffect} from 'react';
export function APIAxios(){
    const[product,setProduct]= useState({Name:"",Price:0,Stock:false,ShippedTo:[],Rating:{Rate:0,Count:0},Photo:""});
    useEffect(()=>{
        axios.get("product.json")
        .then(response=>{
            setProduct(response.data);
        })
    },[])

    return(
        <div className="container-fluid">
            <img width="200" height="200" src={product.Photo} alt="Description"/>
            <dl>
                <dt>Name</dt>
                <dd>{product.Name}</dd>
                <dt>Price</dt>
                <dd>{product.Price}</dd>
                <dt>Stock</dt>
                <dd>{(product.Stock)===true?"Available":"Out Of Stock"}</dd>
                <dt>ShipperTo</dt>
                <dd>
                    <ol>
                    {
                        product.ShippedTo.map((item)=>
                            <li key={item}>{item}</li>)
                    }
                    </ol>
                </dd>
                <dt>Rating</dt>
                <dd>{product.Rating.Rate}<span className="bi bi-star-fill"/>[{product.Rating.Count}]</dd>
            </dl>
        </div>
    )
}