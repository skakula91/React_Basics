import react, { Component } from 'react';
import './counter.css'
import PropTypes from 'prop-types'

class Counter extends Component
{
    //define state in constructor
    constructor()
    {
        super();
        this.state ={counter:0};
    }

    increment=(by)=>
    {
        // best coding practice use arrow function
        this.setState(
            (prevState) => {
               return {counter:prevState.counter + by}
            });
        //console.log(`increment from parent-${by}`);
    }

    decrement=(by)=>
    {
        // best coding practice use arrow function
        this.setState(
            (prevState) => {
               return {counter:prevState.counter - by}
            });
    }

    reset =()=>{
        this.setState(
            () => {
               return {counter:0}
            });
    }


    render()
    {
        return(
        <div className="counter">
            <CounterButton by={1} incrementMethod ={this.increment} decrementMethod={this.decrement}></CounterButton>
            <CounterButton by={5} incrementMethod ={this.increment} decrementMethod={this.decrement}></CounterButton>
            <CounterButton by={10} incrementMethod ={this.increment} decrementMethod={this.decrement}></CounterButton>
            <span className = "count">{this.state.counter}</span>
            <div>
               <button className="reset" onClick={this.reset}>Reset</button>
            </div>
        </div>
        );
    }
}

class CounterButton extends Component
{
    //define state in constructor
    constructor()
    {
        super();
        this.state ={counter:0};
    }

    increment=()=>
    {
        //this.setState({counter:this.state.counter + this.props.incrementby})
        this.props.incrementMethod(this.props.by);
    }

    decrement=()=>
    {
        //this.setState({counter:this.state.counter - this.props.incrementby})
        this.props.decrementMethod(this.props.by);
    }
    
    render()
    {
        return <div className="counter">
            <button onClick={this.increment}>+{this.props.by}</button>
            <button onClick={this.decrement}>-{this.props.by}</button>
        </div>

    };
    
}

CounterButton.defaultProps ={
    incrementby:1
}

CounterButton.propTypes ={
    incrementby : PropTypes.number
}

export default Counter