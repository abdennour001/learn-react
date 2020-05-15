import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
import CountersProvider from "./components/CountersProvider";

class App extends Component {
    constructor(props) {
        super(props);
        console.log("App - constractor");
    }

    componentDidMount() {
        // Ajax calls
    }

    render() {
        return (
            <CountersProvider>
                <React.Fragment>
                    <NavBar />
                    <main className="container-fluid mt-4">
                        <Counters />
                    </main>
                </React.Fragment>
            </CountersProvider>
        );
    }
}

export default App;
