const subscribersResponses = [];

exports.subscribe = function (res) {
  subscribersResponses.push(res);
  console.log('Subscriber added.');
};

exports.publish = function (message) {
  subscribersResponses.forEach((res) => {
    res.end(message);
  });
  subscribersResponses.length = 0;
  console.log(`Message '${message}' published.`);
};

exports.deleteSubscribersResponse = function (res) {
  const count = subscribersResponses.splice(subscribersResponses.indexOf(res), 1).length;
  console.log('Subscriber deleted.' + count);
};
