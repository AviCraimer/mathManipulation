import {asyncTypes, syncTypes} from '../reduxActions/actionTypes';


const reducer = function (state, action) {
    const initialState = {
        hello: 'world!'
    }

    if (state === undefined) {return initialState;}


    //example switch
    // switch (action.type) {
    //     case asyncTypes.loadFaveRidings:
    //     case asyncTypes.addRemoveFaveRiding:
    //     {
    //         return {...state, faveRidings: action.faveRidings}
    //     }
    //     case syncTypes.showHideMap: {
    //         return {
    //             ...state, showMap: action.showMap
    //         }
    //     }

    // }

    return state;
}//End of reducer

export default reducer;