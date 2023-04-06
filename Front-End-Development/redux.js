/*
TODO: course name: Front End Development Libraries
TODO: chapter name : Redux
TODO: Answer Type : Solutions
*/

/*
1
name:Create a Redux Store
*/
const store = Redux.createStore(
    (state = 5) => state
)

/*
2
name:Get State from the Redux Store
*/
// Change code below this line
const currentState = store.getState()
/*
3
name:Define a Redux Action
*/
// Define an action here:
var action = {
    type: 'LOGIN'
}
/*
4
name:Define an Action Creator
*/
const action = {
    type: 'LOGIN'
}
// Define an action creator here:
function actionCreator() {
    return action
}
/*
5
name:Dispatch an Action Event
*/
// Dispatch the action here:
store.dispatch(loginAction())
/*
6
name:Handle an Action in the Store
*/
if (action.type == 'LOGIN') {
    return {
        login: true
    }
}
return state
/*
7
name:Use a Switch Statement to Handle Multiple Actions
*/
switch (action.type) {
    case "LOGIN":
        return {
            authenticated: true
        }
        break;
    case "LOGOUT":
        return {
            authenticated: false
        }
        break;

    default:
        return defaultState
        break;
}
/*
8
name:Use const for Action Types
*/
// at the top define this two variable and 
//use variables in the switch case and the each of the functions
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

/*
9
name:Register a Store Listener
*/

// Change code below this line
const addOne = () => (count += 1);
store.subscribe(addOne)
// Change code above this line
/*
10
name:Combine Multiple Reducers
*/
const rootReducer = Redux.combineReducers({
    count: counterReducer,
    auth: authReducer
});
/*
11
name:Send Action Data to the Store
*/

switch (action.type) {
    case ADD_NOTE:
        return action.text
    default:
        return state;
}

const addNoteText = (note) => {
    // Change code below this line
    return {
        type: ADD_NOTE,
        text: note
    }
    // Change code above this line
};

/*
12
name:Use Middleware to Handle Asynchronous Actions
*/
//first changes
// Dispatch request action here
store.dispatch(requestingData())
//second changes
// Dispatch received data action here
store.dispatch(receivedData(data))
/*
13
name:Write a Counter with Redux
*/


const INCREMENT = 'INCREMENT'; // Define a constant for increment action types
const DECREMENT = 'DECREMENT'; // Define a constant for decrement action types

const counterReducer = (state = 0, action) => {// Define the counter reducer which will increment or decrement the state based on the action it receives
    switch (action.type) {
        case INCREMENT:
            return (state += 1);
            break;
        case DECREMENT:
            return (state -= 1);
            break;

        default:
            return state
            break;
    }
};


const incAction = () => {
    return {
        type: INCREMENT
    }
}; // Define an action creator for incrementing

const decAction = () => {
    return {
        type: DECREMENT
    }
}; // Define an action creator for decrementing

const store = Redux.createStore(counterReducer); // Define the Redux store here, passing in your reducers



/*
14
name: Never Mutate State
*/


const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
    'Go to the store',
    'Clean the house',
    'Cook dinner',
    'Learn to code',
];

const immutableReducer = (state = todos, action) => {
    switch (action.type) {
        case ADD_TO_DO:
            // Don't mutate state here or the tests will fail
            return todos.concat(action.todo)
        default:
            return state;
    }
};

const addToDo = (todo) => {
    return {
        type: ADD_TO_DO,
        todo
    }
}

const store = Redux.createStore(immutableReducer);



/*
15
name:Use the Spread Operator on Arrays
*/

// Don't mutate state here or the tests will fail
// replace the return inside the {case}
return [...state, action.todo]



/*
16
name:Remove an Item from an Array
*/
// Don't mutate state here or the tests will fail
//replace return inside {case}
return
[...state.slice(0, action.index),
...state.slice(action.index + 1, state.length)]


/*
17
name:Copy an Object with Object.assign
*/
// don't mutate state here or the tests will fail
//replace return inside {case}

return Object.assign({}, state, { status: 'online' })

