import {
  addChat,
  addMessage,
  changeChat,
  fire,
  unFire,
  initChats,
  request,
  success,
  failure
} from './chatActions';
import {push} from 'connected-react-router';
import {createAction} from "redux-api-middleware";

export default store => next => action => {
  next(action);
  if(action.type === initChats.toString()) {
    store.dispatch(fetchChats());
  } else if(action.type === changeChat.toString()) {
    const { id } = action.payload || {};
    store.dispatch(push(`/chats/${id}`, { chatId: id }));
    store.dispatch(unFire(id));
  } else if(action.type === addChat.toString()) {
    const { id } = action.payload || {};
    store.dispatch(push(`/chats/${id}`, { chatId: id }));
  } else if(action.type === addMessage.toString()) {
    const {state: {chatId: currentChatId} = {}} = store.getState().router.location;
    const {chatId} = action.payload;
    if(chatId !== currentChatId) {
      store.dispatch(fire(chatId));
    }
  }
}

export const fetchChats = () => createAction({
  endpoint: 'https://raw.githubusercontent.com/vatokato/react-03.03/master/RomanOtstavnov/data/messages.json',
  method: 'GET',
  types: [
    request.toString(),
    {
      type: success.toString(),
      payload: (action, state, res) => res.json().then(json => json)
    },
    failure.toString()
  ]
});
