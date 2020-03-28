import {addMessage, addChat} from './chatActions';
import Bot from "../bots/aiprojectBot";
import {MESSAGE_TYPE} from "../constants";

const bot = new Bot();

export default (store) => (next) => (action) => {
    next(action);
    if (action.type === addMessage.toString()) {
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
    setTimeout(() => {
        bot.getAnswer({ name, message })
            .then(answer => store.dispatch(addMessage(
              chatId,
              bot.name,
              answer,
              MESSAGE_TYPE.ai
            )))
            .catch(error => console.error(error));
    }, 1000);
}

function generateBotAnswerForNewChat(store, id) {
    const chat = store.getState().chat.items.find(chat=>chat.id===id) || {};
    const {name} = chat;
    setTimeout(() => {
        store.dispatch(
          addMessage(
            id,
            bot.name,
            `Welcome to new chat chat, ${name}`,
            MESSAGE_TYPE.ai
          )
        );
    }, 1000);
}
