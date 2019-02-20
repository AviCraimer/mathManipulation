import {combineReducers} from 'redux';

import windowData from './windowData';
import reducer1 from './reducer1';
//import other sectional reducers



const rootReducer = combineReducers({
    reducer1,
    windowData
});

export default rootReducer;


//Boiler plate reducer
// const reducer = function (state, action) {
//     const initialState = {};

//     if (state === undefined) {return initialState;}
//     return state;
// }