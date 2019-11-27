import React from 'react';
import Button from '../Components/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
const Add =function(props){
        return(
            
             
                 
           <div className="input-group container">
            <input type="text" className="form-control" onChange={props.input} placeholder="Add a task"/>
        <div className  ="input-group-append">
           
        <Button onClick={props.submit} value="Submit"/></div>
            
            </div>

            
            
        );
    
}
export default Add;