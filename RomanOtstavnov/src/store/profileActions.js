import {createActions} from 'redux-actions';

export const {profileInit, profileRequest, profileSuccess, profileFailure} = createActions({
    PROFILE_INIT: userName => ({userName}),
    PROFILE_REQUEST: () => ({}),
    PROFILE_SUCCESS: (data) => ({data}),
    PROFILE_FAILURE: (error) => ({error}),
});
