import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 2 },
            { id: 3, value: 0 },
            { id: 4, value: 4 }
        ]
    };

    constructor(props) {
        super(props);
        console.log("App - constractor");
    }

    componentDidMount() {
        // Ajax calls
    }

    render() {
        return (
            <React.Fragment>
                <NavBar
                    totalCounters={
                        this.state.counters.filter(item => item.value > 0)
                            .length
                    }
                    onAddCounter={this.addCounter}
                    onRemoveZeros={this.removeZeros}
                />
                <main className="container-fluid mt-4">
                    <Counters
                        counters={this.state.counters}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete}
                        onReset={this.handleReset}
                    />
                </main>
            </React.Fragment>
        );
    }

    removeZeros = () => {
        this.setState({
            counters: this.state.counters.filter(counter => counter.value > 0)
        });
    };

    addCounter = () => {
        this.setState({
            counters: [
                ...this.state.counters,
                {
                    id: this.state.counters.length
                        ? Math.max.apply(
                              Math,
                              this.state.counters.map(counter => {
                                  return counter.id;
                              })
                          ) + 1
                        : 0,
                    value: 0
                }
            ]
        });
    };

    handleIncrement = id => {
        this.setState({
            counters: this.state.counters.map(counter => {
                return counter.id !== id
                    ? counter
                    : { ...counter, value: counter.value + 1 };
            })
        });
    };

    handleDecrement = id => {
        this.setState({
            counters: this.state.counters.map(counter => {
                return counter.id !== id
                    ? counter
                    : { ...counter, value: counter.value - 1 };
            })
        });
    };

    handleDelete = id => {
        this.setState({
            counters: this.state.counters.filter(item => item.id !== id)
        });
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    };
}

export default App;
