const util = require('util');

const phrase = {
  Hello: 'Привет',
  world: 'мир',
};

function PhraseError(message) {
  this.name = 'PhraseError';
  this.message = message;
  Error.captureStackTrace(this, PhraseError);
}
util.inherits(PhraseError, Error);

function HttpError(message, status) {
  this.name = 'HttpError';
  this.message = message;
  this.status = status;
  Error.captureStackTrace(this, HttpError);
}
util.inherits(HttpError, Error);

function getPhrase(name) {
  if (!phrase[name]) {
    throw new PhraseError(`Нет такой фразы: ${name}`);
  }

  return phrase[name];
}

function makePage(url) {
  if (url !== 'index.html') {
    throw new HttpError('Нет такой страницы', 404);
  }

  //return util.format('%s, %s!', getPhrase('Hello'), getPhrase('world'));
  return `${getPhrase('Hell')}, ${getPhrase('world')}!`;
}

try {
  let page = makePage('index.html');
  console.log(page);
} catch (e) {
  if (e instanceof HttpError) {
    console.log(e.status, e.message);
  } else {
    console.error(`Ошибка: ${e.name};\nСообщение: ${e.message};\nСтэк: ${e.stack};\n`);
  }
}
