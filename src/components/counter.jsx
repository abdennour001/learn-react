import React, { useContext } from "react";
import { CountersContext } from "./CountersProvider";

const Counter = props => {
    const [counters, setCounters] = useContext(CountersContext);

    const handleIncrement = id => {
        setCounters(
            counters.map(counter => {
                return counter.id !== id
                    ? counter
                    : { ...counter, value: counter.value + 1 };
            })
        );
    };

    const handleDecrement = id => {
        setCounters(
            counters.map(counter => {
                return counter.id !== id
                    ? counter
                    : { ...counter, value: counter.value - 1 };
            })
        );
    };

    const formatCount = () => {
        const { value } = props.counter;
        return value === 0 ? "Zero" : value;
    };

    const getBadgeClasses = () => {
        let classes = "badge m-2 badge-";
        classes += props.counter.value === 0 ? "warning" : "primary";
        return classes;
    };

    return (
        <div className="d-flex justify-content-left">
            <div className="row align-items-center mb-2 w-50">
                <div className="col-3 text-left">
                    <button
                        className="btn btn-secondary btn-sm w-50"
                        onClick={() => handleDecrement(props.counter.id)}
                        disabled={props.counter.value === 0}
                    >
                        -
                    </button>
                </div>
                <div className="col-3 text-center">
                    <span className={getBadgeClasses()}>{formatCount()}</span>
                </div>
                <div className="col-3 text-right">
                    <button
                        className="btn btn-secondary btn-sm w-50"
                        onClick={() => handleIncrement(props.counter.id)}
                    >
                        +
                    </button>
                </div>
                <div className="col-3">
                    <button
                        onClick={() => props.onDelete(props.counter.id)}
                        className="btn btn-danger btn-sm w-100"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
