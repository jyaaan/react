<<<<<<< HEAD
/*
Notes from video:
Core react ideology: States can be changed but props cannot

While we think of components in terms of functions--taking in props and doing something with them,
we will usually use classes as they can, unlike functions, hold state.

The old way of doing things is to use a constructor:
constructor(props) {
  super(props);
  this.state = { key: value };
}

But it's much easier to use class property, shown below.

this.setState is react's built-in method which takes in an object
which is then merged int the component's current state.
Use this instead of this.state.counter++ since doing so will not re-render the component
with new data.

It's important to note that setState is asynchronous (most of the time), which means that multiple calls
to it in a single scope will eliminate unnecessary re-renders of the whole tree.

Efficient!

Well, but there is a gotcha:
// assuming this.state = { value: 0 };
this.setState({ value: this.state.value + 1});
this.setState({ value: this.state.value + 1});
this.setState({ value: this.state.value + 1});

the value of state will be 1 instead of the expected 3 as the 3 calls are grouped together.
this is an example of errors caused by race conditions.
To get around this, you can pass a function as the first argument of setState and react will
call it with the at-call-time-current state with the expectation that the returned object will
be merged into state.

By modifying the above code in such a way will product the desired results:
// assuming this.state = { value: 0 };
this.setState(prevState => ({ value: prevState.value + 1}));
this.setState(prevState => ({ value: prevState.value + 1}));
this.setState(prevState => ({ value: prevState.value + 1}));

Keep in mind that setState can also accept a callback function as its second argument.
Also note that if you parenthesize the body of a function, it will return an object literal expression

*/


class Button extends React.Component { // You should extend component class by default
	state = { counter: 0 };
  
  handleClick = () => {
    this.setState(prevState => ({ // notice the parenthesis before the bracket.
                                  // this is because we are not trying to return a value
                             /*
Notes from video:
Core react ideology: States can be changed but props cannot

While we think of components in terms of functions--taking in props and doing something with them,
we will usually use classes as they can, unlike functions, hold state.

The old way of doing things is to use a constructor:
constructor(props) {
  super(props);
  this.state = { key: value };
}

But it's much easier to use class property, shown below.

this.setState is react's built-in method which takes in an object
which is then merged int the component's current state.
Use this instead of this.state.counter++ since doing so will not re-render the component
with new data.

It's important to note that setState is asynchronous (most of the time), which means that multiple calls
to it in a single scope will eliminate unnecessary re-renders of the whole tree.

Efficient!

Well, but there is a gotcha:
// assuming this.state = { value: 0 };
this.setState({ value: this.state.value + 1});
this.setState({ value: this.state.value + 1});
this.setState({ value: this.state.value + 1});

the value of state will be 1 instead of the expected 3 as the 3 calls are grouped together.
this is an example of errors caused by race conditions.
To get around this, you can pass a function as the first argument of setState and react will
call it with the at-call-time-current state with the expectation that the returned object will
be merged into state.

By modifying the above code in such a way will product the desired results:
// assuming this.state = { value: 0 };
this.setState(prevState => ({ value: prevState.value + 1}));
this.setState(prevState => ({ value: prevState.value + 1}));
this.setState(prevState => ({ value: prevState.value + 1}));

Keep in mind that setState can also accept a callback function as its second argument.
Also note that if you parenthesize the body of a function, it will return an object literal expression

*/


class Button extends React.Component { // You should extend component class by default
	state = { counter: 0 };
  
  handleClick = () => {
    this.setState(prevState => ({ // notice the parenthesis before the bracket.
                                  // this is because we are not trying to return a value
                                  // we are trying to return an object expression
                                  // the parenthesis is arrow function short syntax for "return"
    	counter: prevState.counter + 1
    }));
  };

  // alternatively you can use the following if a new value does not depend 
  // on a previous state
  handleclick = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  
	render() {
  	return (
    	<button onClick={this.handleClick}>
      	{this.state.counter}
      </button>
    );
  }
}

ReactDOM.render(<Button />, mountNode); // memorize this

     // we are trying to return an object expression
                                  // the parenthesis is arrow function short syntax for "return"
    	counter: prevState.counter + 1
    }));
  };

  // alternatively you can use the following if a new value does not depend 
  // on a previous state
  handleclick = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  
	render() {
  	return (
    	<button onClick={this.handleClick}>
      	{this.state.counter}
      </button>
    );
  }
}

ReactDOM.render(<Button />, mountNode); // memorize this

||||||| merged common ancestors
=======
/*
Notes from video:
Core react ideology: States can be changed but props cannot

While we think of components in terms of functions--taking in props and doing something with them,
we will usually use classes as they can, unlike functions, hold state.

The old way of doing things is to use a constructor:
constructor(props) {
  super(props);
  this.state = { key: value };
}

But it's much easier to use class property, shown below.

this.setState is react's built-in method which takes in an object
which is then merged int the component's current state.
Use this instead of this.state.counter++ since doing so will not re-render the component
with new data.

It's important to note that setState is asynchronous (most of the time), which means that multiple calls
to it in a single scope will eliminate unnecessary re-renders of the whole tree.

Efficient!

Well, but there is a gotcha:
// assuming this.state = { value: 0 };
this.setState({ value: this.state.value + 1});
this.setState({ value: this.state.value + 1});
this.setState({ value: this.state.value + 1});

the value of state will be 1 instead of the expected 3 as the 3 calls are grouped together.
this is an example of errors caused by race conditions.
To get around this, you can pass a function as the first argument of setState and react will
call it with the at-call-time-current state with the expectation that the returned object will
be merged into state.

By modifying the above code in such a way will product the desired results:
// assuming this.state = { value: 0 };
this.setState(prevState => ({ value: prevState.value + 1}));
this.setState(prevState => ({ value: prevState.value + 1}));
this.setState(prevState => ({ value: prevState.value + 1}));

Keep in mind that setState can also accept a callback function as its second argument.

*/


class Button extends React.Component { // You should extend component class by default
	state = { counter: 0 };
  
  handleClick = () => {
  	this.setState(prevState => ({
    	counter: prevState.counter + 1
    }));
  };

  // alternatively you can use the following if a new value does not depend 
  // on a previous state
  handleclick = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  
	render() {
  	return (
    	<button onClick={this.handleClick}>
      	{this.state.counter}
      </button>
    );
  }
}

ReactDOM.render(<Button />, mountNode);

>>>>>>> 4a313bc941bc46a52915e2a7283adfd604099968
