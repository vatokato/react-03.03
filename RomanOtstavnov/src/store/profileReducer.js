import { handleActions } from 'redux-actions';
import {
    profileInit,
    profileRequest,
    profileSuccess,
    profileFailure
} from './profileActions';

const initialState = {
    userName: null,
    isLoaded: false,
    error: null,
};

export default handleActions({
    [profileInit]: (store, action) => {
        const { userName } = action.payload;
        return {
            ...store,
            userName,
            isLoaded: false,
        };
    },
    [profileRequest]: (store, action) => {
        return {
            ...store,
            isLoaded: true,
        };
    },
    [profileSuccess]: (store, action) => {
        return {
            ...store,
            ...action.payload,
            isLoaded: false,
        };
    },
    [profileFailure]: (store, action) => {
        return {
            ...store,
            ...action.payload,
            isLoaded: false,
        };
    },
}, initialState)
