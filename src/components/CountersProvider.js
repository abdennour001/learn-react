import React, { useState } from "react";
import Counters from "./counters";

export const CountersContext = React.createContext();

const CountersProvider = props => {
    const [counters, setCounters] = useState([
        { id: 1, value: 0 },
        { id: 2, value: 2 },
        { id: 3, value: 0 },
        { id: 4, value: 4 }
    ]);

    return (
        <CountersContext.Provider value={[counters, setCounters]}>{props.children}</CountersContext.Provider>
    );
};

export default CountersProvider;
