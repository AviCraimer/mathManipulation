import {asyncTypes} from '../actionTypes';

const loadLocalStorage = (localStorageKey, defaultValue = null) => {
    return new Promise (resolve => {
        const localStorageData = localStorage[localStorageKey];

        const action = {
            type: asyncTypes.loadLocalStorage,

        }

        action[localStorageKey] = (localStorageData) ? JSON.parse(localStorageData) : defaultValue;

        resolve(action);
    }
    , reject => {
        reject({
            type: asyncTypes.addRemoveFaveRiding + '_ERROR',
            error: reject
        })
    }
    );
}

export default loadLocalStorage;