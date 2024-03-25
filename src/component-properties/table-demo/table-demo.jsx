import {useEffect, useState} from 'react';
export function ViewComponent(props){
    return(
        <label>{props.text}</label>
    )
}
export function EditComponent(props){
    return(
        <input type="text" value={props.text}/>
    )

}
export function TableDemo(){

    const [component,setComponent]=useState('');
    const [userName] =useState('david');
    const [btnText,setBtnText]=useState('Edit');
    function handleEditClick(){
        if(btnText==="Edit"){
            setBtnText("Save");
            setComponent(<EditComponent text={userName}/>);
        }else{
            setBtnText("Edit");
            setComponent(<ViewComponent text={userName}/>)
        }
    }
    function handleCancelClick(){
        setComponent(<ViewComponent text={userName}/>);
        setBtnText("Edit");

    }
    useEffect(()=>{
        setComponent(<ViewComponent text={userName}/>);
    },[userName])
    return(
        <div className="container-fluid">
            <table>
                <tr>
                    <td>
                    <label>{component}</label>
                    </td>
                    <td>
                        <button onClick={handleEditClick}>{btnText}</button>
                        <button onClick={handleCancelClick}>Cancel</button>
                    </td>
                </tr>
            </table>

        </div>
    )
}

