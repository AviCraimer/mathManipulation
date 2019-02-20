import {createStore} from 'redux';
import rootReducer from './reducers';

//This is for the redux dev tools
const reduxDevToolExtension = (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//Create the store
const store = createStore(rootReducer, undefined,reduxDevToolExtension );

//To Console Log the store's new state each time it is changed by an action. It's not really necessary given the redux dev tools.
// const printStoreState = () => {
//     console.log('Store\'s state: ', store.getState());
// }

//Run printStoreState every time state is updated
// store.subscribe(printStoreState);

//This is for importing dispatch to bind the action creators
export const dispatch = store.dispatch;

//This is to import into app.js
export default store;