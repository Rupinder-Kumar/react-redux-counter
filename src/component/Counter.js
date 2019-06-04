import React,{Component} from 'react';
class Counter extends Component{
    render(){
        const {Counter,increment,decrement,reset} = this.props;

        return(
            <div className="App">
                <div>{Counter}</div>
                <div>
                    <button onClick={increment}>INCREMENT BY 1</button>
                </div>
                <div>
                    <button onClick={decrement}>DECREMENT BY 1</button>
                </div>
                <div>
                    <button onClick={reset}>RESET</button>
                </div>
            </div>
        );
    }
}

export default Counter;