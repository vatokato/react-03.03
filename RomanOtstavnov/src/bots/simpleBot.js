class Bot {
  constructor(name) {
    this.name = name || 'AI';
    this.messages = [
      'Неплохая попытка, %name%',
      '%name%, полегче',
      'Мне кажется, что ты преувеличиваешь',
      '%name%, я тебя не понимаю',
      '%name%, я с тобой полностью согласен',
      'Неужели ты сам до этого додумался, %name%?',
    ];
  }

  getAnswer ({ name }, onSuccess, onError) {
    const randIndex = Math.floor(Math.random() * this.messages.length);
    return onSuccess(this.messages[randIndex].replace('%name%', name));
  }
}

export default Bot;