import {Component} from 'react'

class Display extends Component {

    render(){
        return (
            <div>
                <div id={"banner"}></div>
                <h1 id={"display"}>|{this.props.text}</h1>
            </div>
        );
    }
}

export default Display;