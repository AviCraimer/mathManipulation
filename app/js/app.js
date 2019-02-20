
// React
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './reactComponents/Main';

//Redux
import { Provider } from "react-redux";
import store from './reduxStore';


import fn from './pureFunctions/fn';
//Add fn as global variable so it only needs to be imported once
window.fn = fn;





const rootRender = function () {
    ReactDOM.render(
        <Provider store={store}>
            {/* Can add header and footer components later */}
            <Main/>
        </Provider>
        , document.getElementById('reactApp'));
}

//Render the app
rootRender();

export default store;