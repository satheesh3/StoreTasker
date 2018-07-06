import * as ActionTypes from './actionTypes.js';

export default {
    dataRecieve: data => dispatch => {dispatch({type:ActionTypes.DATA_RECIEVED, payload:{data}})},
    inputChanged: data => dispatch => {dispatch({type:ActionTypes.INPUT_CHANGED,payload:{data}})},
    setFilter: data => dispatch => {dispatch({type:ActionTypes.SET_FILTER, payload:{data}})}
}