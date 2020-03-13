module.exports = function (callback, ms, trailing) {
  var t = 0, call;
  arguments.length < 3 && (trailing = true);
  return function () {
    var args = arguments;
    call = function () {
      callback.apply(undefined, args);
      t = new Date().getTime() + ms;
      call = null;
      trailing && setTimeout(function () {
        call && call();
      }, ms);
    };
    if (new Date().getTime() > t) call();
  }
};
