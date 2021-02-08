import React from "react";
import { useDispatch, connect } from 'react-redux'

const App = (payload) => {
    let {counter, increment} = payload;

    return (
        <div>
            Value: {counter} <button onClick={increment}>Increment</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    // Get Data from Store and return
}


const mapDispatchToProps = (dispatch) => {
    // Create event handler and dispatch event to reducer
}


// connect app to redux store
export default App;
