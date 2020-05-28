import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Bugs from "./components/Bugs";

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // Ajax calls
    }

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <main className="container-fluid mt-4">
                    <Bugs></Bugs>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
