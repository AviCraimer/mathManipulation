import {dispatch} from '../../reduxStore';
import _loadLocalStorage from './loadLocalStorage';

let asyncActionCreators = {
    _loadLocalStorage
    // _getElectionDataUpdate,
    // _loadFaveRidings,
    // _addRemoveFaveRiding,
    // _getRelatedStories
};

// console.log('dispatch in async action index.js', dispatch);
///Binding the action creators to asynchronously dispatch to redux store.
const dispatchAsyncAction = (actionPromise) => {
    actionPromise.then(actionOrActions =>{
        //Async action creator returns either a single action, or an array of actions.

        if (Array.isArray(actionOrActions)) {//Test to see if it returns an array
            actionOrActions.forEach(action => dispatch(action));
        } else {
            dispatch(actionOrActions);
        }

        } ) //End of .then
        .catch((error) => {
            console.log('ERROR THAT IS NOT CAUGHT IN ASYNC ACTION CREATOR!');
            console.log('ACTION NOT DISPATCHED!' );
            console.log(error);
        } )
        ;
}

const bindAsyncActionCreator = function (actionCreator) {
    return function (...args) {
        dispatchAsyncAction( actionCreator(...args) );
    }
}






//Loop through binding each action creator to dispatch
for (const key in asyncActionCreators) {
    const func = asyncActionCreators[key];

    //remove underscores from start of key and add bound action creators
    asyncActionCreators[key.replace('_','')] = bindAsyncActionCreator(func);
}

//Named Exports of each action creator
export const {
    loadLocalStorage

    // loadFaveRidings,
    // getElectionDataInit,
    // getElectionDataUpdate,
    // addRemoveFaveRiding,
    // getRelatedStories
}  =  asyncActionCreators;
