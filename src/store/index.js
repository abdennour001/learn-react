import { createStore } from "redux";
import bugs from "../reducers";

const store = createStore(
    bugs,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
