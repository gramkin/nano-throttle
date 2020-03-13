module.exports = function (callback, ms, trailing) {
  var wait, call;
  arguments.length < 3 && (trailing = true);
  return function () {
    var args = arguments;
    call = function () {
      callback.apply(undefined, args);
      wait = true;
      call = null;
      setTimeout(function () {
        wait = false;
        if (call && trailing) call();
      }, ms);
    };
    if (!wait) call();
  }
};
