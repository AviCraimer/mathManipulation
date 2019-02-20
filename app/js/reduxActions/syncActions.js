import {syncTypes} from './actionTypes';
import {dispatch} from '../reduxStore';
// import { bindActionCreators } from 'redux';

// console.log('dispatch in syncActions', dispatch);

const syncActionCreators = {};

syncActionCreators.windowResize = function (windowWidth) {
    const action = {
        type: syncTypes.windowResize,
        windowWidth
    }

    return action;
}
syncActionCreators.showHideMap = function (currentShowMap) {
    console.log('show hide map action creator fired')
    //Flip the boolean value of showMap.
    const newShowMap = !currentShowMap;

    const action = {
        type: syncTypes.showHideMap,
        showMap: newShowMap
    }

    return action;
}


//This sets the riding Sort Function Name  The actual sorting of ridings is done in RidingRsTable_container and sorted ridings are passed down as a prop to the presentational component.
syncActionCreators.changeRidingSort = function (e) {
    console.log('changeRidingSort action creator fired')
    // the dataset value is a weird DOM string thingy, so we convert it into a normal JS object.
    const sortData = Object.assign({}, e.target.dataset);
    //Add the text from the button element to the data (this is used to display the currenlty active sort)
    sortData.text = e.target.innerText;

    const action = {
        type: syncTypes.changeRidingSort,
        ridingSort: sortData,
        reSortRidings: true
    }
    return action;
}

syncActionCreators.shouldRidingsBeSorted = function (trueFalse) {
    const action = {
        type: syncTypes.shouldRidingsBeSorted,
        reSortRidings: trueFalse
    }

    return action;
}
syncActionCreators.setRidingView = function (isShown, activeRidingNum) {
    activeRidingNum = Number(activeRidingNum);
    const action = {
        type: syncTypes.setRidingView,
        isShown,
        activeRidingNum: (activeRidingNum) ? activeRidingNum : null
    }
    //Note, when riding view is shown, the ridingSearchLongLat is reset to null in the reducer.
    return action;
}

syncActionCreators.setRidingSearchLongLat = function (longLat) {
    return {
        type: syncTypes.setRidingSearchLongLat,
        ridingSearchLongLat: longLat
    }
}

syncActionCreators.updateRidingSearchString = function (newString) {

    const action = {
        type: syncTypes.updateRidingSearchString,
        ridingSearchString: newString
    }

    return action;
}




//END OF ACTION CREATORS


//BIND THE ACTION CREATORS TO DISPATCH
const bindActionCreator = function (actionCreator, dispatch) {
    return function (...args) {
        dispatch( actionCreator(...args) );
    }
}

const bindActionCreators = function (actionCreators, dispatch) {
    const boundActionCreators = {};
    //Loop through binding each action creator to dispatch
    for (const key in actionCreators) {
        const func = actionCreators[key];

        //remove underscores from start of key and add bound action creators
        boundActionCreators[key] = bindActionCreator(func, dispatch);
    }
    return boundActionCreators;
}

//Bind Action creators.
const boundSyncActionCreators = bindActionCreators(syncActionCreators, dispatch);

export const {
windowResize,
showHideMap,
changeRidingSort,
shouldRidingsBeSorted,
setRidingView,
setRidingSearchLongLat,
updateRidingSearchString
}  =  boundSyncActionCreators;
// export default boundSyncActionCreators;