import React from "react";
import { useDispatch } from "react-redux";
import { addBug, removeBug, resolveBug } from "../actions";

const Bug = ({ bug }) => {
    const getClass = isResolved => {
        return isResolved
            ? "container-fluid d-flex p-3 mb-4 ml-2 resolved"
            : "container-fluid d-flex p-3 mb-4 ml-2 not-resolved";
    };

    const dispatch = useDispatch();

    const handleRemoveBug = () => {
        dispatch(removeBug(bug.id));
    };

    const handleResolve = () => {
        dispatch(resolveBug(bug.id));
    };

    return (
        <div className={getClass(bug.resolved)}>
            <div className="mr-2">
                <span
                    className={
                        bug.resolved
                            ? "lead col-3 text-success"
                            : "lead col-3 text-danger"
                    }
                >
                    {bug.id}
                </span>
            </div>
            <div className="mr-auto">
                <span className="lead">{bug.description}</span>
            </div>
            <div className="">
                <div className="d-flex">
                    {!bug.resolved && (
                        <button
                            onClick={handleResolve}
                            className="btn btn-success mr-4"
                        >
                            Resolve
                        </button>
                    )}
                    <button onClick={handleRemoveBug} className="btn btn-danger">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Bug;
