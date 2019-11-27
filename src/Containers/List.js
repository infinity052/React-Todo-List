import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './Add';
import Table from './Table';
class Item{
    constructor(task,done){
        this.task=task;
        this.done=done;
    }

}

export default class List extends React.Component{
    constructor(props){
        super(props);
        this.state={items:[],input:''};
    }

    inputUpdate(event){
        
        this.setState({...this.state,input: event.target.value});
       
    }
    sbmt(){
        let arr=this.state.items;
        if(this.state.input==''){
            alert("Please enter a task");
            return;
        }
        let input=this.state.input;
        input=input.replace(input[0],input[0].toUpperCase());
        let newItem = new Item(input,false);
        arr.push(newItem);
        this.setState({...this.state, items: arr});
        
    }
    delete(event){
 
       
         let arr=this.state.items;
         this.setState({...this.state,items: arr.filter((ele,i)=>{return i!=event.target.id})});
    }
    checkItem(event){
        var arr=this.state.items;
        arr[event.target.id].done=!arr[event.target.id].done;
        this.setState({...this.setState, items: arr});
    }
    render(){
        return(
            <>  
            <Add submit={this.sbmt.bind(this)} input={this.inputUpdate.bind(this)}/>
            <br/>
            <Table items={this.state.items} delete={this.delete.bind(this)} checkbox={this.checkItem.bind(this)}/>
            </>
        );
    }
}