import {Component} from 'react'

class CalcButton extends Component {

    render(){
        let text = this.props.text;
        return (
            <button onClick={this.props.onClick}>{text}</button>
        );
    }
}

export default CalcButton;