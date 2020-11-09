import {Component} from 'react'
import CalcButton from './CalcButton';
import Display from './Display';

class Calculator extends Component {

    constructor(props){
        super(props);

        this.constructOperations();
        this.constructFuncs();

        this.state = {text: "", new: "", result: 0, operator: null, func: this.operations["+"]};
    }

    constructFuncs = () => {
        this.funcs = {};
        
        let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        for(let num of nums){
            this.funcs[num] = () => this.num(num);
        }

        for (let op in this.operations){
            this.funcs[op] = () => this.operate(op);
        }

        this.funcs["="] = this.showResult;
        this.funcs["clear"] = this.clear;

    }

    constructOperations = () => {
        this.operations = {};
        this.operations["+"] = this.plus;
        this.operations["-"] = this.minus;
        this.operations["x"] = this.times;
        this.operations["/"] = this.divide;
        this.operations["^"] = this.power;
    }

    plus = (a, b) => {return a + b;}
    minus = (a, b) => {return a - b;}
    times = (a, b) => {return a * b;}
    divide = (a, b) => {return a / b;}
    power = (a, b) => {return Math.pow(a, b);}

    constructButtons = () => {
        let buttons = []
        for(let symbol in this.funcs){ 
            buttons.push(<CalcButton xpos={0} ypos={0} text={symbol} onClick={this.funcs[symbol]}/>);
        }
        return <div id="btn">{buttons}</div>;
    }

    constructDisplay = () => {
        return (
                <Display text={this.state.text}/>
        );
    }

    operate = (sign) => {
        let cur = this.state.text;
        if(!this.state.result && this.state.new === "" && this.state.operator === null){
            cur = "";
        }
        this.setState({text: cur + sign, new: "", result: this.state.func(this.state.result, Number(this.state.new)), operator: sign, func: this.operations[sign]});
    }

    num = (val) => {
        let cur = this.state.text;
        if(!this.state.result && this.state.new === "" && this.state.operator === null){
            cur = "";
        }
        this.setState({text: cur + val, new: this.state.new + val});
    }

    clear = () => {
        this.setState({text: "", new: "", result: 0, operator: null, func: this.operations["+"]});
    }

    showResult = () => {
        let calc = this.state.func(this.state.result, Number(this.state.new));
        if(Math.round(calc) - calc !== 0){
            calc = calc.toFixed(4);
        }
        this.setState({text: "" + calc, new: "", result: 0, operator: null, func: this.operations["+"]});
    }

    render(){

        return (
        <div id={"area"}>
             {this.constructDisplay()}
             {this.constructButtons()}   
        </div>
        );
    }
}

export default Calculator;