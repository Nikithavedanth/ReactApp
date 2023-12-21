import { useState } from "react";
export function DataBinding(){
    var userName = "John"
    var product = {
        "Name":"Samsung",
        "Price":45000.44
    }
    var categories = ["All","Electronics","Fashion","Footwear"];
    var products = [{Name:"TV",Price:45000.44,Stock:true},
                   {Name:"Mobile",Price:12000.44,Stock:false}];
    var menu = [{category:"Electronics",product:["TV","Mobile"]},{category:"Footwear",product:["Boots","Casuals"]}];
    const [usName]= useState('john');
    const [uName,setUName]= useState('john');
    function NameChange(e){
        setUName(e.target.value)
    }
    const [pro1,setPro]=useState({Name:"",Price:0,Stock:false})
    function handleNameChange(e){
        setPro({Name:e.target.value,
        Price:pro1.Price,
        Stock:pro1.Stock})
    }
    function handlePriceChange(e){
        setPro({Name:pro1.Name,
        Price:e.target.value,
        Stock:pro1.Stock})
    }
    function handleStockChange(e){
        setPro({Name:pro1.Name,
        Price:pro1.Price,
        Stock:e.target.value})
    }

    return(
        <div className="container-fluid">
            <h1> Data Binding</h1>
            <p> Hello! {userName} </p>
            <h2> Product Details</h2>
            <dl>
                <dt>Name</dt>
                <dd>{product.Name}</dd>
                <dt> Price </dt>
                <dd>{product.Price}</dd>
            </dl>
            <ol>
                {
                    categories.map((category)=>
                    <li key={category}>{category}</li>
                    )
                }
            </ol>
            <select>
                {
                    categories.map(category=>
                        <option key={category}>{category}</option>)
                }
            </select>
            <div>
                {
                    categories.map(category=>
                        <div key={category}><input type="checkbox"/>
                        <label>{category}</label></div>)
                }
            </div>
            <div>
                {
                    categories.map(category=>
                        <button className="btn btn-primary me-1" key={category}>{category}</button>)
                }
            </div>
            <h2> Product Table</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(prod=>
                            <tr key={prod}>
                            <td> {prod.Name}</td>
                            <td>{prod.Price}</td>
                            <td>{(prod.Stock)===true?"Available":"Out of Stock"}</td>
                            <td>
                                <button className="btn btn-danger me-2">
                                   <span className="bi bi-trash-fill"></span>
                                </button>
                                <button className="btn btn-warning">
                                    <span className="bi bi-pen-fill"></span>
                                </button></td></tr>)
                           
                    }      
                </tbody>
            </table>
            {/* Nested Iteration/list */}
            <ol>
                {
                    menu.map(item=>
                        <li key={item.category}>{item.category}
                        <ul>
                            {
                                item.product.map(prod=>
                                    <li key="{prod}">{prod}</li>)
                            }
                        </ul></li>)
                }
            </ol>
            {/* Dropdown(nested) */}
            <div>
                <select>
                    {
                        menu.map(item=>
                            <optgroup label={item.category} key={item.category}>{item.category}
                            {
                             item.product.map(prod =>
                               <option key={prod}>{prod}</option>)
                            }
                            </optgroup>)
                    }
                </select>
            </div>
            {/* one way binding */}
            <h2>One way binding</h2>
            <dl>
                <dt>UserName</dt>
                <dd> <input type="text" value={usName}></input></dd>
            </dl>
            <p>Hello! {usName} </p>

            {/* two  way binding */}
           
            <h2> Two way binding</h2>
            <dl>
                <dt>UserName</dt>
                <dd> <input type="text" value={uName} onChange={NameChange}></input></dd>
            </dl>
            <p>Hello! {uName} </p>
            {/* simple two binding representation */}
            <h2>Register Product</h2>
            <dl>
                <dt> Name</dt>
                <dd><input type="text" value={pro1.Name} onChange={handleNameChange}></input></dd>
                <dt> Price</dt>
                <dd><input type="text" value={pro1.Price}  onChange={handlePriceChange}></input></dd>
                <dt> Stock</dt>
                <dd><input type="checkbox" checked={pro1.Stock} onChange={handleStockChange}></input>{(pro1.Stock===true)?"Available":"Out of Stock"}</dd>
            </dl>
            <dl>
                <dt>Name</dt>
                <dd>{pro1.Name}</dd>
                <dt>Price</dt>
                <dd>{pro1.Price}</dd>
                <dt>Stock</dt>
                <dd>{(pro1.Stock===true)?"Available":"Out of Stock"}</dd>
            </dl>

        </div>
    )
}