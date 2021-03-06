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
    let {value} = state;

    return {
        counter: value
    }
}

const mapDispatchToProps = (dispatch) => {
    //const dispatch = useDispatch();

    const increment = () => {
        dispatch({type: "counter/increment"});
    }

    return {
        increment
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
