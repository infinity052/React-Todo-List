import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './Button';
import './ListItem.css';

const ListItem = function(props){
    var jsx=props.done?<del><h4 className="h5">{props.item}</h4></del>:<h4 className="h5">{props.item}</h4>;
    return (
        <>
        <td>
       
            <input type="checkbox" onChange={props.checkbox} id={props.index}/></td>

<td>{jsx}</td>
       <td align="end"> <Button onClick={props.delete} id={props.index} value={<img id={props.index} className="trashicon" src="https://icon-library.net/images/waste-basket-icon/waste-basket-icon-1.jpg" alt="Delete"/>}/></td>
        </>

    );
}
export default ListItem;