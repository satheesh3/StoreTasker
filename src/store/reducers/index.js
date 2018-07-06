import * as ActionTypes from '../actions/actionTypes';
import { combineReducers } from 'redux';
const projectInitialState = [];
const filterInitialState = {
    key: "",
    day:{},
}

function projectReducer(state = projectInitialState, action = {}) {
    console.log(action)
    switch (action.type) {
        case ActionTypes.DATA_RECIEVED:
            return [...action.payload.data]
        default: return state;
    }
}
function filterReducer(state = filterInitialState, action = {}) {
    switch (action.type) {
        case ActionTypes.INPUT_CHANGED:
            return { ...state, key: action.payload.data }
        case ActionTypes.SET_FILTER:
            return { ...state, day: action.payload.data}
        default: return state;
    }
}

const reducer = combineReducers({
    projects: projectReducer,
    filters: filterReducer,
})

export default reducer;