import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Home from "./components/Home";
import Movie from "./components/Movie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
    state = {
        movies: [{}]
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // Ajax calls
    }

    render() {
        return (
            <React.Fragment>
                <Router>
                    <NavBar />
                    <main className="container-fluid mt-4">
                        <Switch>
                            <Route path="/" component={Home}></Route>
                            <Route path="/movie/:id" component={Movie}></Route>
                        </Switch>
                    </main>
                </Router>
            </React.Fragment>
        );
    }
}

export default App;
