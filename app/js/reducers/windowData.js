import {asyncTypes, syncTypes} from '../reduxActions/actionTypes';

const reducer = function (state, action) {
    const initialState = {
        windowWidth: 0
    }

    if (state === undefined) {return initialState;}

    const {windowWidth} = action;

    if (action.type === syncTypes.windowResize) {
        // console.log('Action inside window data window resize case:', action);
        return {
            ...state, windowWidth
        }
    }

    return state;
}


export default reducer;