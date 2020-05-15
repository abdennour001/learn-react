import React, { useState, useContext } from "react";
import Counter from "./counter";
import { CountersContext } from "./CountersProvider";

const Counters = () => {
    const [counters, setCounters] = useContext(CountersContext);

    const handleDelete = id => {
        setCounters(counters.filter(item => item.id !== id));
    };

    const handleReset = () => {
        const counters_ = counters.map(c => {
            c.value = 0;
            return c;
        });
        setCounters(counters_);
    };

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-12 text-left">
                    <button
                        onClick={handleReset}
                        className="btn btn-primary btn-sm mb-5"
                    >
                        Reset
                    </button>
                </div>
                <div className="col-12">
                    {(!counters.length && (
                        <p className="text-muted">No counters found.</p>
                    )) ||
                        counters.map(counter => (
                            <Counter
                                key={counter.id}
                                onDelete={handleDelete}
                                counter={counter}
                            />
                        ))}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Counters;
