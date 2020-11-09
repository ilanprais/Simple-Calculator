import {Component} from 'react'

class Display extends Component {

    render(){
        return (
            <div>
                <div id={"banner"}></div>
                <input type="text" id={"display"} value={this.props.text}/>
            </div>
        );
    }
}

export default Display;