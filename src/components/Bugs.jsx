import React from "react";
import { useSelector } from "react-redux";
import Bug from "./Bug";

const Bugs = () => {
    const bugs = useSelector(state => state);

    return (
        <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="d-flex flex-column">
                    {bugs.map(bug => (
                        <Bug key={bug.id} bug={bug}></Bug>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Bugs;
