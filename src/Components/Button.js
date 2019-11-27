import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Button =function(props){
    return (
        <>
        <button id={props.id} className={props.value==="Submit"?"btn btn-success":"btn btn-danger"} onClick={props.onClick}>{props.value}</button>
        </>
    );
}
export default Button;