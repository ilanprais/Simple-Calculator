import {Component} from 'react'

class CalcButton extends Component {

    render(){
        let s = {marginLeft: this.props.xpos, marginTop: this.props.ypos};
        let text = this.props.text;
        return (
            <button style = {s} onClick={this.props.onClick}>{text}</button>
        );
    }
}

export default CalcButton;