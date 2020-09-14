function unary(fn) {
  return function one(args) {
    return fn(args);
  };
}

function binary(fn) {
  return function two(arg1, arg2) {
    return fn(arg1, arg2);
  };
}

function f(...args) {
  return args;
}

let shapeUnary = unary(f);
let shapeBinary = binary(f);
shapeUnary(1, 2, 3, 4);
shapeBinary(1, 2, 3, 4);
