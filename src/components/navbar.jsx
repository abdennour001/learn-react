import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../actions";

const NavBar = () => {
    const dispatch = useDispatch();
    const [desc, setDesc] = useState("");

    const handleRemoveResolved = () => {
        dispatch(actions.removeResolvedBug());
    };

    const handleChangeDesc = e => {
        setDesc(e.target.value);
    };

    const handleAddBug = e => {
        e.preventDefault();
        dispatch(actions.addBug(desc));
        setDesc("");
    };

    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                <span style={{ fontSize: "1.24rem", fontWeight: "bold" }}>
                    Bug
                </span>
                <span style={{ fontSize: "1.24rem", fontWeight: "light" }}>
                    Manager
                </span>
            </a>
            <div className="d-flex">
                <form
                    className="form-inline my-lg-0 mr-4"
                    onSubmit={handleAddBug}
                >
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        value={desc}
                        onChange={handleChangeDesc}
                        placeholder="Description"
                        aria-label="Search"
                    />
                    <button
                        type="submit"
                        className="btn btn-outline-light mx-2 my-sm-0"
                    >
                        Add Bug
                    </button>
                </form>

                <button
                    onClick={handleRemoveResolved}
                    className="btn btn-outline-warning my-sm-0"
                >
                    Remove Resolved
                </button>
            </div>
        </nav>
    );
};

export default NavBar;
