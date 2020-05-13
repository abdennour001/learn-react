import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="d-flex justify-content-left">
                <div className="row align-items-center mb-2 w-50">
                    <div className="col-3 text-left">
                        <button
                            className="btn btn-secondary btn-sm w-50"
                            onClick={() => this.props.onDecrement(this.props.counter.id)}
                            disabled={this.props.counter.value === 0}
                        >
                            -
                        </button>
                    </div>
                    <div className="col-3 text-center">
                        <span className={this.getBadgeClasses()}>
                            {this.formatCount()}
                        </span>
                    </div>
                    <div className="col-3 text-right">
                        <button
                            className="btn btn-secondary btn-sm w-50"
                            onClick={() => this.props.onIncrement(this.props.counter.id)}
                        >
                            +
                        </button>
                    </div>
                    <div className="col-3">
                        <button
                            onClick={() => this.props.onDelete(this.props.counter.id)}
                            className="btn btn-danger btn-sm w-100"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
}

export default Counter;
