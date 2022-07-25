//transducer
function add1(v) {
  return v + 1;
}
function isOdd(v) {
  return v % 2 === 1;
}
function sum(total, v) {
  return total + v;
}

var transducer = compose(mapReducer(add1),filterReducer(isOdd))
transducer(transducer, sum, 0, [1, 3, 4, 6, 9, 12, 16, 21]);
//without a transducer
function add1(v) { return v + 1 }
function isOdd(v) { return v % 2 === 1 }
function sum(total, v) { return total + v }

var list = [1, 3, 4, 6, 9, 12, 16, 21]

list.reduce(function allAtOnce(total, v) {
    v = add1(v)
    if (isOdd(v)) {
        total = sum(total,v)
    }
    return total
},0)