import React, {Component} from 'react';
import Calculator from './Calculator'
import './css/style.css'

class Application extends Component {

    constructor(props){
        super(props);

        this.state = {};
    }

    handleClick = () => {
        
    }

    resetCount = (e) => {
        
    }

    componentDidUpdate(props, state){
      
    }

    render(){

        return (
           <Calculator/>
        );
    }

}

export default Application;