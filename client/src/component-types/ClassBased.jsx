import { Component } from "react";


export default class ClassBased extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
    }

    componentDidMount(){
        console.log("componentDidMount :", this.state.count);
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.count !== this.state.count){
            console.log("componentDidUpdate :", this.state.count);
        }
    }

    addCount = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }))
    }

    render() {
        return (
            <div>
                <p>Count : {this.state.count}</p>
                <button onClick={this.addCount}>Add count</button>
            </div>
        );
    }
}