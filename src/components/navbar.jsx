import React, { Component } from "react";

class NavBar extends Component {
    state = {};
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                    Navbar{" "}
                    <span className="badge badge-pill badge-secondary ml-2">
                        {this.props.totalCounters}
                    </span>
                </a>
                <div>
                    <button
                        className="btn btn-outline-light mx-2 my-sm-0"
                        onClick={this.props.onAddCounter}
                    >
                        Add counter
                    </button>
                    <button
                        className="btn btn-outline-warning my-sm-0"
                        onClick={this.props.onRemoveZeros}
                    >
                        Remove zeros
                    </button>
                </div>
            </nav>
        );
    }
}

export default NavBar;
