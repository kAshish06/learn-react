let str = "hello";
let it1 = str[Symbol.iterator]();
it1.next();
it1.next();

let obj3 = {
  a: 1,
  b: 2,
  c: 3,
  *[Symbol.iterator]() {
    for (let key of Object.keys(this)) {
      yield this[key];
    }
  },
};

let obj2 = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.iterator]: function* () {
    for (let key of Object.keys(this)) {
      yield this[key];
    }
  },
};

let obj45 = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.iterator]: function () {
    let keys = Object.keys(this);
    let index = 0;
    return {
      next: () =>
        index < keys.length
          ? { done: false, value: this[keys[index++]] }
          : { done: true, value: undefined },
    };
  },
};
