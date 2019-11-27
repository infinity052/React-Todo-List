import React,{Component} from 'react';
import List from './Containers/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
export default class App extends Component{
    constructor(props){
        super(props);
        this.state={};

    }
    render(){
       return(<div className="background">
        <nav className="navbar navbar-expand-sm navbar-white bg-secondary sticky-top">
            <label className="display-4 navbar-nav navbar-text mx-auto">Todo List</label>    
        </nav>
        <br/>
        <List/>
        
        </div>);
    }
}