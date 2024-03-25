// Fetch method - Async response for handling API 
import { useState,useEffect } from "react"
export function AsyncFetch(){
    const[product,setProduct]= useState({Name:'',Price:0,Stock:false,ShippedTo:[],Rating:{Rate:0,Count:0},Photo:''});
    useEffect(()=>{
        fetch("product.json")
        .then(response=>response.json())
        .then(products=>{
            setProduct(products);
        })
    },[])

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="column">
                    <img width="200" height="200" src={product.Photo} alt="Description"/>
                </div>
                <div className="column">
                     <dl>
                         <dt>Name</dt>
                         <dd>{product.Name}</dd>
                         <dt>Price</dt>
                         <dd>{product.Price}</dd>
                         <dt>Stock</dt>
                         <dd>{(product.Stock)===true?"Available":"Out Of Stock"}</dd>
                         <dt>ShippedTo</dt>
                         <dd>
                             <ol>
                             {
                                 product.ShippedTo.map(item=>
                                     <li key={item}>{item}</li>)
                             }</ol>
                         </dd>
                         <dt>Rating</dt>
                         <dd>{product.Rating.Rate}<span className="bi bi-star-fill"/>[{product.Rating.Count}]</dd>
                     </dl>
                
                </div>
            </div>
        </div>
    )
}