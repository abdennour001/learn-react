import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-12 text-left">
                        <button
                            onClick={() => this.props.onReset()}
                            className="btn btn-primary btn-sm mb-5"
                        >
                            Reset
                        </button>
                    </div>
                    <div className="col-12">
                        {(!this.props.counters.length && (
                            <p className="text-muted">No counters found.</p>
                        )) ||
                            this.props.counters.map(counter => (
                                <Counter
                                    key={counter.id}
                                    onDelete={this.props.onDelete}
                                    onIncrement={this.props.onIncrement}
                                    onDecrement={this.props.onDecrement}
                                    counter={counter}
                                />
                            ))}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Counters;
