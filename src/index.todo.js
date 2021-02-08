import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'

import App from "./app/index";
// import created store

// Provide store to components
ReactDOM.render(
    <App />, 
    document.getElementById("root")
);
