import {useState} from 'react';
export function UseState(){
    const [product] = useState({Name:"TV",Price:45000.44});
    const [categories] = useState(["All","Electronics","Fashion","Footwear"])
    return(
        <div className='container-fluid'>
            <h2> Product Details</h2>
            <dl>
                <dt>Name</dt>
                <dd>{product.Name}</dd>
                <dt>Price</dt>
                <dd>{product.Price}</dd>
            </dl>
            <h3> Select Category</h3>
            <select>
                {
                    categories.map(category=>
                        <option key ={category}>{category}</option>)
                }
            </select>
        </div>
    )
}