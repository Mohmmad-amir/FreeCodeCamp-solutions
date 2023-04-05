/*
TODO: course name: Front End Development Libraries
TODO: chapter name : React
*/

/*
1st
name:Create a Simple JSX Element
*/
const JSX = <h1>Hello JSX!</h1>;



/*
2nd
name:Create a Complex JSX Element
*/
const JSX =
    <div>
        <h1>heading one</h1>
        <p>paragraph one</p>
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>



/*
3rd
name:Add Comments in JSX
*/
const JSX = (
    <div>
        <h1>This is a block of JSX</h1>
        <p>Here's a subtitle</p>
        {/* this is comment */}
    </div>
);



/*
4th
name:Render HTML Elements to the DOM

*/

const JSX = (
    <div>
        <h1>Hello World</h1>
        <p>Lets render this to the DOM</p>
    </div>
);
// Change code below this line
ReactDOM.render(JSX, document.getElementById("challenge-node"));

/*
5th
name: Define an HTML Class in JSX

*/

const JSX = (
    <div className="myDiv">
        <h1>Add a class to this div</h1>
    </div>
);


/*
6th
name: Learn About Self-Closing JSX Tags

*/

const JSX = (
    <div>
        <h2>Welcome to React!</h2> <br />
        <p>Be sure to close all tags!</p>
        <hr />
    </div>
);


/*
7th
name: Create a Stateless Functional Component

*/
const MyComponent = function () {
    // Change code below this line

    return (
        <div className='customClass'>hello</div>
    );

    // Change code above this line
}



/*
8th
name: Create a React Component

*/

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        // Change code below this line
        return (
            <div>
                <h1>Hello React!</h1>
            </div>
        )
        // Change code above this line
    }
};

/*
9th
name: Create a Component with Composition
*/

const ChildComponent = () => {
    return (
        <div>
            <p>I am the child</p>
        </div>
    );
};

class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>I am the parent</h1>
                { /* Change code below this line */}

                <ChildComponent />
                { /* Change code above this line */}
            </div>
        );
    }
};


/*
10th
name:Use React to Render Nested Components

*/
const TypesOfFruit = () => {
    return (
        <>
            <h2>Fruits:</h2>
            <ul>
                <li>Apples</li>
                <li>Blueberries</li>
                <li>Strawberries</li>
                <li>Bananas</li>
            </ul>
        </>
    );
};

const Fruits = () => {
    return (
        <div>
            { /* Change code below this line */}
            <TypesOfFruit />
            { /* Change code above this line */}
        </div>
    );
};

class TypesOfFood extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Types of Food:</h1>
                { /* Change code below this line */}
                <Fruits />
                { /* Change code above this line */}
            </div>
        );
    }
};


/*
11th
name: Compose React Components

*/
class Fruits extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>Fruits:</h2>
                { /* Change code below this line */}
                <NonCitrus />
                <Citrus />
                { /* Change code above this line */}
            </div>
        );
    }
};

class TypesOfFood extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Types of Food:</h1>
                { /* Change code below this line */}
                <Fruits />
                { /* Change code above this line */}
                <Vegetables />
            </div>
        );
    }
};
/*
12th
name: Render a Class Component to the DOM

*/
class TypesOfFood extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Types of Food:</h1>
                {/* Change code below this line */}
                <Fruits />
                <Vegetables />
                {/* Change code above this line */}
            </div>
        );
    }
};

// Change code below this line
ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'));

/*
13th
name: Write a React Component from Scratch

*/
// change code below this line
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h1>My First React Component!</h1>
        );
    }
};
ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));

/*
14th
name: Pass Props to a Stateless Functional Component
*/

const CurrentDate = (props) => {
    return (
        <div>
            { /* Change code below this line */}
            <p>The current date is:{props.date} </p>
            { /* Change code above this line */}
        </div>
    );
};

class Calendar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>What date is it?</h3>
                { /* Change code below this line */}
                <CurrentDate date={Date()} />
                { /* Change code above this line */}
            </div>
        );
    }
};

/*
15th
name:Pass an Array as Props

*/


const List = (props) => {
    { /* Change code below this line */ }
    return <p>{props.tasks.join()}</p>
    { /* Change code above this line */ }
};

class ToDo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>To Do Lists</h1>
                <h2>Today</h2>
                { /* Change code below this line */}
                <List tasks={["walk dog", "workout"]} />
                <h2>Tomorrow</h2>
                <List tasks={["walk dog", "workout", "today"]} />
                { /* Change code above this line */}
            </div>
        );
    }
};


/*
16th
name:Use Default Props

*/
const ShoppingCart = (props) => {
    return (
        <div>
            <h1>Shopping Cart Component</h1>
        </div>
    )
};
// Change code below this line
ShoppingCart.defaultProps = { items: 0 }

/*
17th
name:Override Default Props

*/
const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
    quantity: 0
}

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        { /* Change code below this line */ }
        return <Items quantity={10} />
        { /* Change code above this line */ }
    }
};
/*
18th
name:Use PropTypes to Define the Props You Expect

*/
const Items = (props) => {
    return (
        <h1>Current Quantity of Items in Cart: {props.quantity}</h1>)
};

// Change code below this line

Items.propTypes = { quantity: PropTypes.number.isRequired };
// Change code above this line

Items.defaultProps = {
    quantity: 0
};


class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <Items quantity={19} />
    }
};
/*
19th
name:Access Props Using this.props

*/
//first changes
{ /* Change code below this line */ }
<Welcome name="amir" />
{ /* Change code above this line */ }
//second changes
{ /* Change code below this line */ }
<p>Hello, <strong>{this.props.name}</strong>!</p>
{ /* Change code above this line */ }

/*
20th
name:Review Using Props with Stateless Functional Components
*/
const Camper = props => <p>{props.name}</p>
Camper.propTypes = { name: PropTypes.string.isRequired }
Camper.defaultProps = { name: "CamperBot" }
/*

21st
name:Create a Stateful Component
*/
// Only change code below this line
this.state = { firstName: "myName" }
// Only change code above this line
/*


22nd
name:Render State in the User Interface
*/
{ /* Change code below this line */ }
<h1>{this.state.name}</h1>
{ /* Change code above this line */ }


/*
23rd
name:Render State in the User Interface Another Way
*/
//first changes
const name = this.state.name
//second chnages
// uncomment this line <h1> { name }</h1>

/*
24th
name:Set State with this.setState
*/
// Change code below this line
this.setState({
    name: "React Rocks!"
})
// Change code above this line
/*


25th
name:Bind 'this' to a Class Method
*/
//first changes
this.handleClick = this.handleClick.bind(this)
//second changes
// uncomment this line <button  onClick = { this.handleClick } > Click Me</button >

/*
26th
name: Use State to Toggle an Element
*/
//first chnages
this.toggleVisibility = this.toggleVisibility.bind(this)
//second chnages
toggleVisibility(){
    this.setState(state => {
        if (state.visibility === true) {
            return { visibility: false }
        } else {
            return { visibility: true }
        }
    })
}


/*
27th
name:Write a Simple Counter
*/
//first changes
this.increment = this.increment.bind(this)
this.decrement = this.decrement.bind(this)
this.reset = this.reset.bind(this)
//second changes
increment(){
    this.setState(state => (
        { count: state.count + 1 }
    ))
}
decrement(){
    this.setState(state => (
        { count: state.count - 1 }
    ))
}
reset(){
    this.setState(state => (
        { count: 0 }
    ))
}

/*
28th
name:Create a Controlled Input
*/
//first chnage
this.handleChange = this.handleChange.bind(this)
//second changes
handleChange(event){
    this.setState({
        input: event.target.value
    })
}
//third changes
<input value={this.state.input} onChange={this.handleChange} />

/*
29th
name:Create a Controlled Form
*/
//fitst chnages
handleSubmit(event) {
    // Change code below this line
    event.preventDefault()
    this.setState({
        submit: this.state.input
    })
    // Change code above this line
}
//second chnage
//inside the form
<input value={this.state.input} onChange={this.handleChange} />
//third changes
//outside the form
{/* uncomment this line <h1>{this.state.submit}</h1> */ }

/*
30th
name:Pass State as Props to Child Components
*/
//first change
{/* Change code below this line */ }
<Navbar name={this.state.name} />
{/* Change code above this line */ }
//second 
{/* Change code below this line */ }
<h1>Hello, my name is: {this.props.name}</h1>
{/* Change code above this line */ }

/*
31st
name:Pass a Callback as Props
*/
{ /* Change code below this line */ }
<GetInput
           input={this.state.inputValue}
           handleChange={this.handleChange}/>
         <RenderInput
           input={this.state.inputValue}/>
{ /* Change code above this line */ }

/*
32nd
name:Use the Lifecycle Method componentWillMount
*/

// Change code below this line
console.log("hahaha");
// Change code above this line


/*
33rd
name:Use the Lifecycle Method componentDidMount
*/
{/* Change code below this line */ }
<h1>Active Users: {this.state.activeUsers}</h1>
{/* Change code above this line */ }

/*
34th
name:Add Event Listeners
*/
// Change code below this line
componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress)
}
componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress)

}
// Change code above this line

/*
35th
name:Optimize Re-Renders with shouldComponentUpdate
*/
// Change code below this line
if (nextProps.value % 2 == 0) {
    return true
}
return false;
// Change code above this line

/*
36th
name:Introducing Inline Styles
*/
<div style={{ color: 'red', fontSize: 72 }}>Big Red</div>

/*
37th
name:Add Inline Styles in React
*/
//first changes
const styles = {
    color: 'purple',
    fontSize: 40,
    border: "2px solid purple"
}
    //second chnages
    < div style = { styles } > Style Me!</>


/*
38th
name: Use Advanced JavaScript in React Render Method
*/
//first chnages
const answer = possibleAnswers[this.state.randomIndex]
//second changes
//     <p > //uncomment this p tag
//     { answer }
// </p >

/*
39th
name:Render with an If-Else Condition
*/
if (this.state.display) {
    return (
        <div>
            <button onClick={this.toggleDisplay}>Toggle Display</button>
            <h1>Displayed!</h1>
        </div>
    );
} else {
    return (
        <div>
            <button onClick={this.toggleDisplay}>Toggle Display</button>
        </div>
    );
}


/*
40th
name:Use && for a More Concise Conditional
*/
{ this.state.display && <h1>Displayed!</h1> }

/*
41st
name:Use a Ternary Expression for Conditional Rendering
*/
//first change in constructor
this.state = {
    input: '',
    userAge: ''
}
//second chnages
{ this.state.userAge === '' ? buttonOne : this.state.userAge >= 18 ? buttonTwo : buttonThree }


/*
42nd
name:Render Conditionally from Props
*/
//first chnages
// add this line inside of h1 tag
{ this.props.fiftyFifty ? "You Win!" : "You Lose!" }
//second changes
//add this line inside of handleClick
this.setState({
    counter: this.state.counter + 1
})

//third change
const expression = Math.random() >= 0.5 ? true : false // change here
    //forth chnage
    < Results fiftyFifty = { expression } /> // add this line


    /*
43rd
name:Change Inline CSS Conditionally Based on Component State
*/
if (this.state.input.length > 15) {
    // here can be written => inputStyle.border = '3px solid red';
    inputStyle = {
        border: '3px solid red'
    }
}

/*
44th
name: Use Array.map() to Dynamically Render Elements
*/
//first chnage
this.state = {
    userInput: "",
    toDoList: []
}
//second chnage
const items = this.state.toDoList.map(list => <li>{list}</li>);
/*
45th
name:Give Sibling Elements a Unique Key Attribute
*/
const renderFrameworks = frontEndFrameworks.map((item, index) => <li key={item + 1}>{item}</li>);

/*
46th
name: Use Array.filter() to Dynamically Filter an Array
*/

const usersOnline = this.state.users.filter(user => user.online == true);
const renderOnline = usersOnline.map(user => <li key={user.username + 1}>{user.username}</li>);


/*
47th
name: Render React on the Server with renderToString
*/
ReactDOMServer.renderToString(<App />)