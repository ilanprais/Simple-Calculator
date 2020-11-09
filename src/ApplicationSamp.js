import React, {Component} from 'react';
import HighScore from './HighScore'
import './css/style.css'

class Application extends Component {

    constructor(props){
        super(props);

        this.state = {count: 0, overTen: false};
    }

    handleClick = () => {
        this.setState({count: this.state.count + 1});
    }

    resetCount = (e) => {
        this.setState({count: 0, overTen: false});
    }

    componentDidUpdate(props, state){
      if(!this.state.overTen && this.state.count >= 10 && this.state.count !== state.count){
        this.setState({overTen: true});
      }
    }

    render(){

        let count = this.state.count;

        return (
            <div>
                <h3>You clicked {count} times</h3>
                <HighScore 
                    overTen={this.state.overTen}
                    onReset={this.resetCount}
                />
                <span>
                    <button onClick={() => this.handleClick()}>Click here yu ppl</button>
                </span>
            </div>
        );
    }

}

export default Application;