module.exports = function (module) {
  return function () {
    //let arg = [module.filename].concat(Array.from(arguments));
    let arg = [module.filename].concat([].slice.call(arguments));
    console.log(...arg);
  };
};
