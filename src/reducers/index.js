import * as actions from "../actions";
import Bug from "./Bug";

/**
 * bugs reducers
 */

const initialState = [];
let bug_id = -1;

export const bugs = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_BUG:
            return [...state, Bug(++bug_id, action.payload.description)];
        case actions.REMOVE_BUG:
            return state.filter(bug => bug.id !== action.payload.id);
        case actions.RESOLVE_BUG:
            return state.map(bug =>
                bug.id === action.payload.id ? { ...bug, resolved: true } : bug
            );
        case actions.REMOVE_RESOLVED_BUG:
            return state.filter(bug => bug.resolved !== true);
        default:
            return state;
    }
};

export default bugs;
