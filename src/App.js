import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import About from "./components/About";
import Movie from "./components/MoviePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieProvider from "./components/MoviesProvider";

class App extends Component {
    render() {
        return (
            <Router>
                <MovieProvider>
                    <NavBar />
                    <main className="container-fluid mt-4">
                        <Switch>
                            <Route path="/" exact component={Home}></Route>
                            <Route path="/shop" component={Shop}></Route>
                            <Route path="/about" component={About}></Route>
                            <Route path="/movie/:id" component={Movie}></Route>
                        </Switch>
                    </main>
                </MovieProvider>
            </Router>
        );
    }
}

export default App;
