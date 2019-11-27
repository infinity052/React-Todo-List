import React from 'react';
import ListItem from '../Components/ListItem';
import 'bootstrap/dist/css/bootstrap.min.css';
const printItems= function(array,del,chk){
    let counter=0;
    return array.map(element=><tr><ListItem item={element.task} done={element.done} index={counter++} delete={del} checkbox={chk}/></tr>);
}
const Table = function(props){
    return(
        <div className="container container">
        <table className="table table-striped table-secondary">
        <tbody className="tbody">
        {printItems(props.items,props.delete,props.checkbox)}
        </tbody>
        </table>
        </div>
    );
}
export default Table;