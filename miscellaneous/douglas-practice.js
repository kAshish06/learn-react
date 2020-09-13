const { element } = require("prop-types");

/** Module pattern */
let singleton = (function singleton() {
  let privateVariables;
  function privateFunction(x) {
    // use private variables here ...
  }
  return {
    firstMethod: function (a, b) {
      // use private variables here ...
    },
    secondMethod: function (c) {
      // use private function here ...
    },
  };
})();

/** Powerful constructor pattern */

/**
 * 1. make an object using Object literal, new, Object.create or another power constructor
 * 2. define some variables and function - These become the private members.
 * 3. Augment the object with privileged methods. The privileged methods are public but closes
 * over private members of the object (via closure).
 * 4. Return the object.
 */
function powerConstructor(x) {
  let that = {}; // object creates
  let privateVar = ""; // private members
  let privateFunc = function () {}; // private members
  that.privilegedPublicMethod = function () {
    // use private secret function variable here ..
  };
}
function factorial(n) {
  if (n === 1) {
    return n;
  }
  return n * factorial(n - 1);
}

function memoize(fn) {
  let memoObject = {};
  return function (n) {
    if (memoObject[n]) {
      console.log("returning from memo");
      return memoObject[n];
    }
    memoObject[n] = fn(n);
    console.log("returning from proper calc");
    return memoObject[n];
  };
}

function recursiveMemoizer(fn) {
  let memo = {};
  let recur = function (n) {
    let result = memo[n];
    if (!result) {
      result = fn(recur, n);
      memo[n] = result;
    }
    return result;
  };
  return recur;
}

function improvedFactorial(fn, n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * fn(n - 1);
}
/******* Problems ***************************************************** */

function identity(n) {
  return n;
}
function add(x, y) {
  return x + y;
}
function mul(x, y) {
  return x * y;
}
function identityf(n) {
  return function () {
    return n;
  };
}
function addf(x) {
  return function (y) {
    return add(x, y);
  };
}
function applyf(fn) {
  return function (x) {
    return function (y) {
      return fn(x, y);
    };
  };
}
function curry(fn, x) {
  return function (y) {
    return fn(x, y);
  };
}
function curry(fn, x) {
  return applyf(fn)(x);
}
let inc = addf(1);
// aapplyf(add)(1), curry(add, 1)

function methodize(fn) {
  // return fn.bind(null, this);
  return function (y) {
    return fn(this, y);
  };
}
function demethodize(method) {
  return function (x, y) {
    return method.call(x, y);
  };
}
function demethodize(method) {
  return function (x, ...y) {
    return method.apply(x, y);
  };
}
function twice(fn) {
  return function (n) {
    return fn(n, n);
  };
}
function composeu(firstFn, secondFn) {
  return function (n) {
    return secondFn(firstFn(n));
  };
}
function composeb(firstFn, secondFn) {
  return function (a, b, c) {
    return secondFn(firstFn(a, b), c);
  };
}
function once(fn) {
    let calledOnce = false;
    return function (...y) {
        if (calledOnce) {
            throw;
        }
        return fn(...y);
    }
}
function counterf(n) {
    return {
        inc: function() {
            n+=1;
        },
        dec: function() {
            n-=1;
        }
    }
}
function revocable(fn) {
    let revoked = false;
    return {
        invoke: function(x){
            if (revoked) {throw e};
            fn(x);
        },
        revoke: function(){
            revoked = true;
        }
    }
}