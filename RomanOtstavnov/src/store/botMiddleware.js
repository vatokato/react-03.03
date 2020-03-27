import {addMessage, addChat, loadData, initChats} from './chatActions';
import Bot from "../bots/aiprojectBot";
import {MESSAGE_TYPE} from "../constants";

const bot = new Bot();

export default (store) => (next) => (action) => {
    next(action);

    if(action.type === initChats.toString()) {
        loadExternalData(store)
    } else if(action.type === addMessage.toString()) {
        const {chatId, name, content, type} = action.payload;
        if (type !== MESSAGE_TYPE.ai) {
            generateBotAnswer(store, chatId, name, content);
        }
    } else if(action.type === addChat.toString()) {
        const {id} = action.payload;
        generateBotAnswerForNewChat(store, id);
    }


}

function generateBotAnswer(store, chatId, name, message) {
    bot.getAnswer({ name, message })
    .then(answer=> {
        console.log(answer);
        return answer;
    })
        .then(answer => store.dispatch(addMessage(
          chatId,
          bot.name,
          answer,
          MESSAGE_TYPE.ai
        )))
        .catch(error => console.error(error));
}

function generateBotAnswerForNewChat(store, id) {
    const chat = store.getState().chat.chats.find(chat=>chat.id===id) || {};
    const {name} = chat;
    store.dispatch(
      addMessage(
        id,
        bot.name,
        `Welcome to new chat chat, ${name}`,
        MESSAGE_TYPE.ai
      )
    )
}

function loadExternalData(store) {
    fetch('https://raw.githubusercontent.com/vatokato/react-03.03/master/RomanOtstavnov/data/messages.json')
    .then(result => result.json())
    .then(chats => store.dispatch(loadData(chats)))
    .catch(err => console.error(err));
}
