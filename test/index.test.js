const throttle = require('../index');

jest.setTimeout(30000);

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  });
}

const TT = 1000, TI = 10000;

it('throttle trailing', async done => {
  let t = new Date().getTime();

  let lastArg, calls = 0;

  const func = function (i) {
    calls++;
    lastArg = i;
  };

  const throttled = throttle(func, TT);

  let i = 0;

  let interval = setInterval(function () {
    throttled(++i);
  }, 9);

  await delay(TI);

  clearInterval(interval);

  await delay(TT);

  try {
    expect(calls).toBe(TI/TT + 1);
    expect(i).toBe(lastArg);
    done();
  } catch (error) {
    done(error);
  }
});

it('throttle without trailing', async done => {
  let lastArg, calls = 0;

  const func = function (i) {
    calls++;
    lastArg = i;
  };

  const throttled = throttle(func, TT, false);

  let i = 0;

  let interval = setInterval(function () {
    throttled(++i);
  }, 10);

  await delay(TI);

  clearInterval(interval);

  await delay(TT);

  try {
    expect(calls).toBe(TI/TT);
    expect(i).not.toBe(lastArg);
    done();
  } catch (error) {
    done(error);
  }
});


