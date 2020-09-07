function throttle(fn, time) {
  let timeoutId;
  if (timeoutId) {
    return;
  }
  return function () {
    setTimeout(() => {
      fn.apply(this, arguments);
      timeoutId = null;
    }, time);
  };
}
