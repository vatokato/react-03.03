import {
  profileInit,
  profileRequest,
  profileSuccess,
  profileFailure
} from './profileActions';
import {createAction} from "redux-api-middleware";

export default store => next => action => {
  next(action);
  switch (action.type) {
    case profileInit.toString():
      store.dispatch(fetchProfile(action.payload.userName));
      break;
  }
}

export const fetchProfile = (userName) => createAction({
  endpoint: `https://api.github.com/users/${userName}`,
  method: 'GET',
  types: [
    profileRequest.toString(),
    {
      type: profileSuccess.toString(),
      payload: (action, state, res) => res.json().then(json => json)
    },
    profileFailure.toString()
  ]
});
