"use strict";

const { rest } = require("lodash");

//1
function five() { return 5 }
function nine() { return 9 }

//2
function add(x, y) { return x + y }

//3
function add2(fn1, fn2) { return add(fn1(), fn2()) }
//4
function constant(v) {
    return function f() {
        return v;
    }
}
var five = constant(5)
var nine = constant(9)

//5
//iterative approach
function addn(...fns) {
    while(fns.length > 2) {
        let [fn0, fn1, ...rest] = fns;
        fns = [
            function f() {
                return add2(fn0, fn1)
            } ,...rest
        ]
    }
    return add2(fns[0],fns[1])
}
addn([constant(3),constant(7),five,nine,constant(11)])
//recursive
function addn(fn0,fn1,...rest) {
    if (rest.length === 0) return add2(fn0,fn1)
        return addn([
            function f() {
                return add2(fn0,fn1)
            }, 
            ...rest 
        ])
    
}
addn([constant(3), constant(7), five, nine, constant(11)]);
//reduce operator
function addn(fns) {
    return fns.reduce(function reducer(bigFn,fn) {
        return function fn() {
          return add2(bigFn,fn)
      } 
    })()
}
//6
var numbers = [5, 2, 1, 5, 4, 2, 7, 9, 17, 6, 3, 2, 4, 8, 10, 5, 12, 13]
addn(
numbers.reduce(function unique(newList,num) {
    if (!newList.includes(num)) return [...newList,num]
    return newList;
}, [])
//7
    .filter(function isEven(v) {
        return v % 2 == 0;
    })
//8 
        .map(constant)
)

/*
# Lists(And FP Review!)

This is an exercise to practice list operations (map/reduce/filter). We also revisit a variety of previous FP concepts (closure, recursion, etc).

## Instructions

1. Write two functions, each which return a fixed number (different from each other) when called.

2. Write an `add(..)` function that takes two numbers and adds them and returns the result. Call `add(..)` with the results of your two functions from  (1) and print the result to the console.

3. Write an `add2(..)` that takes two functions instead of two numbers, and it calls those two functions and then sends those values to `add(..)`, just like you did in (2) above.

4. Replace your two functions from (1) with a single function that takes a value and returns a function back, where the returned function will return the value when it's called.

5. Write an `addn(..)` that can take an array of 2 or more functions, and using only `add2(..)`, adds them together. Try it with a loop. Try it without a loop (recursion). Try it with built-in array functional helpers (hint: reduce).

6. Start with an array of odd and even numbers (with some duplicates), and trim it down to only have unique values.

7. Filter your array to only have even numbers in it.

8. Map your values to functions, using (4), and pass the new list of functions to the `addn(..)` from (5).

## Bonus

Write tests for your functions.

"use strict";

// Put your code here! :)
*/