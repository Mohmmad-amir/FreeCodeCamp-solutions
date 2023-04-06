/*
TODO: course name: Front End Development Libraries
TODO: chapter name : Redux
TODO: Answer Type : Solutions
*/

/*
NO.1
Name: Getting Started with React Redux
*/
constructor(props){
    super(props)
    this.state = {
        input: '',
        messages: []
    }
}


/*
NO.2
Name:Manage State Locally First
*/

class DisplayMessages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            messages: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
    }

    // add handleChange() and submitMessage() methods here
    handleChange(event) {
        this.setState({
            input: event.target.value,
            messages: this.state.messages
        })
    }

    submitMessage() {
        this.setState({
            input: '',
            messages: [...this.state.messages, this.state.input]
        })
    }

    render() {
        return (
            <div>
                <h2>Type in a new Message:</h2>
                { /* render an input, button, and ul here */}
                <input value={this.state.input} onChange={this.handleChange} /><br />
                <button onClick={this.submitMessage}>Submit</button>
                <ul>
                    {this.state.messages.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
            </div>
        );
    }
};

/*
NO.3
Name:Extract State Logic to Redux
*/

const ADD = "ADD";
const addMessage = message => {
    return {
        type: ADD,
        message
    };
};

// Use ES6 default paramter to give the 'previousState' parameter an initial value.
const messageReducer = (previousState = [], action) => {
    // Use switch statement to lay out the reducer logic in response to different action type
    switch (action.type) {
        case ADD:
            // Use ES6 spread operator to return a new array where the new message is added to previousState
            return [...previousState, action.message];
            break;

        default:
            // A default case to fall back on in case if the update to Redux store is not for this specific state.
            return previousState;
    }
};

const store = Redux.createStore(messageReducer);

/*
NO.4
Name:Use Provider to Connect Redux to React
*/

// Redux Code:
const ADD = 'ADD';

const addMessage = (message) => {
    return {
        type: ADD,
        message
    }
};

const messageReducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [
                ...state,
                action.message
            ];
        default:
            return state;
    }
};



const store = Redux.createStore(messageReducer);

// React Code:

class DisplayMessages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            messages: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }
    submitMessage() {
        const currentMessage = this.state.input;
        this.setState({
            input: '',
            messages: this.state.messages.concat(currentMessage)
        });
    }
    render() {
        return (
            <div>
                <h2>Type in a new Message:</h2>
                <input
                    value={this.state.input}
                    onChange={this.handleChange} /><br />
                <button onClick={this.submitMessage}>Submit</button>
                <ul>
                    {this.state.messages.map((message, idx) => {
                        return (
                            <li key={idx}>{message}</li>
                        )
                    })
                    }
                </ul>
            </div>
        );
    }
};

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
    // render the Provider here
    render() {
        return (
            <Provider store={store}>
                <DisplayMessages />
            </Provider>
        )
    }
    // change code above this line
};

/*
NO.5
Name:Map State to Props
*/

const state = [];

const mapStateToProps = (state) => {
    return {
        messages: state
    }
}

/*
NO.6
Name: Map Dispatch to Props
*/

const addMessage = (message) => {
    return {
        type: 'ADD',
        message: message
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        submitNewMessage: (message) => {
            dispatch(addMessage(message))
        }
    }
}

/*
NO.7
Name: Connect Redux to React
*/

const addMessage = (message) => {
    return {
        type: 'ADD',
        message: message
    }
};

const mapStateToProps = (state) => {
    return {
        messages: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        submitNewMessage: (message) => {
            dispatch(addMessage(message));
        }
    }
};

class Presentational extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <h3>This is a Presentational Component</h3>
    }
};

const connect = ReactRedux.connect;
const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Presentational)

/*
NO.8
Name: Connect Redux to the Messages App
*/

// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
    return {
        type: ADD,
        message: message
    }
};

const messageReducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [
                ...state,
                action.message
            ];
        default:
            return state;
    }
};

const store = Redux.createStore(messageReducer);

// React:
class Presentational extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            messages: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }
    submitMessage() {
        const currentMessage = this.state.input;
        this.setState({
            input: '',
            messages: this.state.messages.concat(currentMessage)
        });
    }
    render() {
        return (
            <div>
                <h2>Type in a new Message:</h2>
                <input
                    value={this.state.input}
                    onChange={this.handleChange} /><br />
                <button onClick={this.submitMessage}>Submit</button>
                <ul>
                    {this.state.messages.map((message, idx) => {
                        return (
                            <li key={idx}>{message}</li>
                        )
                    })
                    }
                </ul>
            </div>
        );
    }
};

// React-Redux:
const mapStateToProps = (state) => {
    return { messages: state }
};

const mapDispatchToProps = (dispatch) => {
    return {
        submitNewMessage: (newMessage) => {
            dispatch(addMessage(newMessage))
        }
    }
};

const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// define the Container component here:
const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational)

class AppWrapper extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Provider store={store}>
                <Container />
            </Provider>
        );
    }
};

/*
NO.9
Name: Extract Local State into Redux
*/

// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
    return {
        type: ADD,
        message: message
    }
};

const messageReducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [
                ...state,
                action.message
            ];
        default:
            return state;
    }
};

const store = Redux.createStore(messageReducer);

// React:
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

class Presentational extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }
    submitMessage() {
        this.props.submitNewMessage(this.state.input)
        this.setState({
            input: ''
        });
    }
    render() {
        return (
            <div>
                <h2>Type in a new Message:</h2>
                <input
                    value={this.state.input}
                    onChange={this.handleChange} /><br />
                <button onClick={this.submitMessage}>Submit</button>
                <ul>
                    {this.props.messages.map((message, idx) => {
                        return (
                            <li key={idx}>{message}</li>
                        )
                    })
                    }
                </ul>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return { messages: state }
};

const mapDispatchToProps = (dispatch) => {
    return {
        submitNewMessage: (message) => {
            dispatch(addMessage(message))
        }
    }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Container />
            </Provider>
        );
    }
};

/*
NO.10
Name: Moving Forward From Here
*/

/*
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './redux/reducers'
import App from './components/App'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
*/

// Only change code below this line
console.log("Now I know React and Redux!")