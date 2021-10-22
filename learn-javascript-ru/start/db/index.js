let db;

function connect() {
  db = require('./ru');
}

function getMessage(messageId) {
  if (!db[messageId]) {
    throw new Error(`Сообщение ${messageId} не найдено`);
  }

  return db[messageId];
}

module.exports = {
  connect: connect,
  getMessage: getMessage,
};
