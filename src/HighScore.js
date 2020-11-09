import React, {Component} from 'react';

class HighScore extends Component {

    componentDidUpdate(props, state){
      
    }

    render(){

        if(this.props.overTen){
            return (
                <h3>
                    You clicked 10 times! 
                    <button onClick={this.props.onReset}>Reset</button>
                </h3>
            );
        }else{
            return null;
        }

    }

}

export default HighScore;