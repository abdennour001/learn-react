import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import produce from "immer";
import store from "./store";
import { Provider } from "react-redux";

import * as actions from "./actions";

store.dispatch(actions.addBug("bug 1"));
store.dispatch(actions.addBug("bug 2"));
store.dispatch(actions.addBug("bug 3"));
store.dispatch(actions.resolveBug(2));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
