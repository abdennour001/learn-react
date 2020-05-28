/**
 * action types
 */

export const ADD_BUG = "ADD_BUG";
export const REMOVE_BUG = "REMOVE_BUG";
export const RESOLVE_BUG = "RESOLVE_BUG";
export const REMOVE_RESOLVED_BUG = "REMOVE_RESOLVED_BUG";

export const action = (type, payload = null) => ({
    type,
    payload
});

/*
 * action creators
 */

export const addBug = description => action(ADD_BUG, { description });

export const removeBug = id => action(REMOVE_BUG, { id });

export const resolveBug = id => action(RESOLVE_BUG, { id });

export const removeResolvedBug = id => action(REMOVE_RESOLVED_BUG);
