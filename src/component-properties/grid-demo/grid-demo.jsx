// import {useState} from 'react';
export function Grid(props){
    // const [students]=useState([[{FirstName:"Raj",LastName:"Kumar"},{FirstName:"Tom",LastName:"Hanks"}]]);
    return(
        <div>
            <table className={' table ' + ' table-hover '+ props.theme}>
                <caption className="caption-top">{props.title}</caption>
                <thead>
                    <tr>
                        {
                            props.fields.map(field=>
                                <th key={field}>{field}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map(item=>
                              <tr key={item}>
                                {
                                    Object.keys(item).map(key=>
                                        <td key={key}>{item[key]}</td>)
                                }
                                </tr>
                            )
                    }
                </tbody>

            </table>

        </div>
    )
}