import React, { useContext } from "react";
import { CountersContext } from "./CountersProvider";

const NavBar = () => {
    const [counters, setCounters] = useContext(CountersContext);

    const removeZeros = () => {
        setCounters(counters.filter(counter => counter.value > 0));
    };

    const addCounter = () => {
        setCounters([
            ...counters,
            {
                id: counters.length
                    ? Math.max.apply(
                          Math,
                          counters.map(counter => {
                              return counter.id;
                          })
                      ) + 1
                    : 0,
                value: 0
            }
        ]);
    };

    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                Navbar{" "}
                <span className="badge badge-pill badge-secondary ml-2">
                    {counters.filter(c => c.value > 0).length}
                </span>
            </a>
            <div>
                <button
                    className="btn btn-outline-light mx-2 my-sm-0"
                    onClick={addCounter}
                >
                    Add counter
                </button>
                <button
                    className="btn btn-outline-warning my-sm-0"
                    onClick={removeZeros}
                >
                    Remove zeros
                </button>
            </div>
        </nav>
    );
};

export default NavBar;
