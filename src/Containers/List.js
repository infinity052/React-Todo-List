import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './Add';
import Table from './Table';
import App from '../App';
class Item{
    constructor(id,task,done){
        this.id = id;
        this.task=task;
        this.done=done;
    }

}

export default class List extends React.Component{
    constructor(props){
        super(props);
        this.state={items:[],input:''};
        this.url = "http://localhost:8080/";
    }
    
    componentDidMount(){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(this.url, requestOptions)
            .then(response => response.text())
            .then(result => {
                var items = [];
                result = JSON.parse(result);
                for(let currTask of result){
                    items.push(new Item(currTask.id,currTask.task, false));
                }
                this.setState({...this.state, items: items});
            })
            .catch(error => console.log('error', error));
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
        var formdata = new FormData();
        formdata.append("task", input);

        var requestOptions = {
          method: 'POST',
          body: formdata,
          redirect: 'follow'
        };

        fetch(this.url + "add", requestOptions)
          .then(response => response.text())
          .then(result => {
            let newItem = new Item(JSON.parse(result).id,input,false);
            arr.push(newItem);
            this.setState({...this.state, items: arr});
          })
          .catch(error => console.log('error', error));
        
        
    }
    delete(event){
 
       
         let arr=this.state.items;
         var formdata = new FormData()
         formdata.append('id',event.target.id);
         var requestOptions = {
            method: 'DELETE',
            body: formdata,
            redirect: 'follow'
          };
          
          fetch(this.url + "delete", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
         this.setState({...this.state,items: arr.filter((ele)=>{return ele.id!=event.target.id})});
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