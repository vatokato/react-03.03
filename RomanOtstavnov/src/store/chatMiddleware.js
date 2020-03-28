import {
  addChat,
  addMessage,
  changeChat,
  failure,
  fire,
  initChats,
  request,
  success,
  unFire
} from './chatActions';
import {push} from 'connected-react-router';

export default store => next => action => {
    const { id: chatId } = action.payload;
    next(action);
    if(action.type === initChats.toString()) {
      loadExternalData(store)
    } else if(action.type === changeChat.toString()) {
      store.dispatch(push(`/chats/${chatId}`, { chatId }));
      store.dispatch(unFire(chatId));
    } else if(action.type === addChat.toString()) {
      store.dispatch(push(`/chats/${chatId}`, { chatId }));
    } else if(action.type === addMessage.toString()) {
      const {state: {chatId: currentChatId} = {}} = store.getState().router.location;
      const {chatId} = action.payload;
      if(chatId !== currentChatId) {
        store.dispatch(fire(chatId));
      }
    }
}

const loadExternalData = async (store) => {
  try {
    store.dispatch(request());
    const response = await fetch('https://raw.githubusercontent.com/vatokato/react-03.03/master/RomanOtstavnov/data/messages.json');
    const chats = await response.json();
    setTimeout(() => {
      store.dispatch(success(chats));
    },2000);
  }
  catch (err) {
    store.dispatch(failure(err));
  }
};
