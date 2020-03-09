// https://aiproject.ru/?api
// Пример запроса: query = {"ask":"Привет","userid":"654321","key":""}
class Bot {
  constructor(name) {
    this.name = name || 'aiprojectBot';
    this.api = '/aiproject/api/';
  }

  getAnswer ({ name, message }, onSuccess, onError) {
    const query = {
      ask: message,
        key: '',
        userid: 648964318,
    };

    const formData = new FormData();
    formData.append('query', JSON.stringify(query));

    fetch(this.api, {
      method: 'POST',
      body: formData,
    })
      .then(r => r.json())
      .then(r => {
        if(r.status === 1 && r.aiml) {
          return onSuccess(r.aiml);
        } else if (r.status === 0) {
          return onError(r.description);
        }
      })
      .catch(error => console.log(error));
  }
}

export default Bot;