class Button extends React.Component {
	state = { counter: 0 };
  
  handleClick = () => {
  	// putting the following in its own function improves readability
    // though you can put this into the onClick attribute of the JSX
  	this.props.onClickFunction(this.props.incrementValue);
  };
  
	render() {
  	return (
    	<button 
      	onClick={this.handleClick}>
      	+{this.props.incrementValue}
      </button>
    );
  }
}

// Note that the way to access props in a function differs
// from that of a class (to this or not to this)
const Result = props => {
	return (
  	<div>{props.counter}</div>
  )
}

class App extends React.Component {
	state = { counter: 0 };
  
  incrementCounter = incrementValue => {
  	this.setState(prevState => ({
    	counter: prevState.counter + incrementValue
    }));
  }
  
  // As Button does not have incrementCounter, this is how we can pass it
  // onClickFunction is not a proper name and is the developer's choice.
	render() {
  	return (
    	<div>
      	<Button incrementValue={1} onClickFunction={this.incrementCounter}/>
        <Button incrementValue={5} onClickFunction={this.incrementCounter}/>
        <Button incrementValue={10} onClickFunction={this.incrementCounter}/>
        <Button incrementValue={100} onClickFunction={this.incrementCounter}/>
        <Result counter={this.state.counter}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, mountNode);