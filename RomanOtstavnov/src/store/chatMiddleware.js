import {addChat, changeChat} from './chatActions';
import {push} from 'connected-react-router';

export default store => next => action => {
    const { id: chatId } = action.payload;
    next(action);
    if([
      addChat.toString(),
      changeChat.toString()
    ].some(type => type === action.type)
    ) {
        store.dispatch(push(`/chats/${chatId}`, { chatId }));
    }
}
