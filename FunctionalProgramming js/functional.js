//trampoline function
function countVowels(count,str) {
  count += (isvowel(str[0]) ? 1 : 0)
  if (str.length <= 1) return count
  return function f() {
    return countVowels(count,str.slice(1))
  }
}
countVowels = curry(2,countVowels)(0)


//continuation passing style
function countVowels(str, cont = v => v) {
  var first = (isVowel(str[o]) ? 1 : 0)
  if (str.lenght <= 1) return cont(first)
  return countVowels(str.slice(1), function f(v) {
    return cont(first + v)
  })
}

//use currying to be functionala
var countVowels = curry(2, function countVowels(count, str) {
  count += (isVowel(str[0]) ? 1 : 0)
  if (str.length <= 1) return count
  return countVowels (count,str.slice(1))
})(0)

//point tall condition
var isVowel = ["a", "e", "i", "o", "u"];

function countVowel(count, str) {
  count += (isVowel(str[0]) ? 1 : 0)
  if (str.length <= 1) return count
  return countVowel(count,str.slice(1))
}

countVowel(0,"The quick brown fox jumps over the lazy dog")
 
/*recursion base standard condition
function countVowels(str) {
  var first = (countVowels(str[0]) ? 1 : 0)
  if (str.length === 0) return first
  return first + countVowels(str.slice(1))
} 
/*recursion code
function countVowels(str) {
  if (str.length == 0) return 0
  var first = (isVowel(str[0]) ? 1 : 0)
  return first + countVowels(str.slice(1))
}
countVowels("The quick brown fox jumps over the lazy dog")


//code to turn to recursion for simplicity
function isVowel(char) {
  return ['a','e','i','o','u'].includes(char)
}
function countVowels(str) {
  var count = 0
  for (i = 0; i < str.length; i++){
    if (isVowel(str[i])) {
      count++
    }
  }
  return count
}

countVowels("The quick brown fox jumps over the lazy dog.")


/*read only data structure use copy object to avoid erro
//dont mutate copy
function processOrder(order) {
  var processOrder = { ...order }
  if (!("status" in order)) {
    processOrder.status = "complete"
  }
  saveTodataabse(processOrder)
}



/*composition with currying
function sum(x, y) {
  return x + y
}
function triple(x) {
  return x * 3
}
function divBy(y, x) { return x / y }
divBy(2,triple(sum(3,5)))
//or use compostiion with currying
sum = curry(2, sum)
divBy = curry(2, divBy)

composeThree(divBy(2),triple,sum(3))(5)


//Associativity
function minus2(x) {
  return x - 2;
}
function triple(x) {
  return x * 3;
}
function increment(x) {
  return x + 1;
}
function composeTwo(fns2, fns1) {
  return function composed(v) {
    return fns2(fn1(v))
  }
}
var f = composeTwo(composeTwo(minus2, triple), increment)
var p = composeTwo (minus2, composeTwo(triple,increment))


//composition
function minus(x) {
  return x-1
}
function triple(x) {
  return x * 3 
}
function increment(x) {
  return x + 1
}

var shippingRate = composeThree(minus, triple, increment)
totalCost = shippingRate(4)


/* pure function
function repeater(count) {
  return memoize(
    function allTheAs() {
      return "".padStart(count,"A")
    }
  )
}
var A = repeater(10)
A()
A()

//memorization 
function repeater(count) {
  return function allTheAs() {
    if ("string" === undefined) {
      return "".padStart(count,'A')
    } return str
  }
}
var A = repeater(10)
A()
A()
//Eager execution
function repeater(count) {
  var str = "".padStart(count, "A")
  return function allTheAs() {
    return str
  }
}
var A = repeater(10)
A()
A()

//lazy execution
function repeater(count) {
  return function allTheAs() {
    return "".padStart(count,"a")
  }
}
var A = repeater(10)
 A()



/*closure
function makeCounter() {
  var counter = 0
  return function increment() {
    return ++counter
  }
}
var c = makeConter()
c()


//modulas operation
function mod(y) {
  return function forX(x) {
    return x % y
  }
}

function eq(y) {
  return function forX(x) {
    return x === y
  }
}
var mod2 = mod(2)
var eq1 = eq(1)

function isOdd(x) {
  return eq1(mod2(x))
}
function compose(fn2, fn1) {
  return function composed(v) {
    return fn2(fn1(v))
  }
}
var isOdd = compose(eq1, mod2)
var isOdd = compose(eq(1),mod(2))



/*compliment on a HOF
function not(fn) {
  return function negate(...args) {
    return !fn(...args)
  }
}

function isOdd(v) {
  return v % 2 === 1
}
var isEven = not(isOdd)



//pointfree refactor
function isEven(v) {
  return v % 2 ===1
}
function isOdd(v) {
  return !isEven (v)
}
isOdd(3)


//equity inclusion
getPerson(function onPerson(person) {
  return renderPerson(person)
})


//spread argumentations
function spreadargs(fn) {
  return function spread(args) {
    return fn(...args)
  }
}

function f(x, y, z, w) {
  return x+y+z+w
}
var g = spreadargs(f)
g([1,2,3,4])


//reverse argumentations
function reversedargs(fn) {
  return function reversed(...args) {
    return fn(args.reverse())
  }
}

function f(...args) {
  return args
}

var g = reversedargs(f)
g(1,2,3,4)


//flip argumentations
function flip(fn) {
  return function flipped(args1, args2, ...args) {
    return fn(args1,args2,...args)
  }
}
function f(...args) {
  return args
}

var g = flip(f)
g(1,2,3,4)

function shippingRate(size, weight, speed) {
  return((size + 1)* weight)+ speed
}
rate = shippingRate(4,5,6)
function addNumbers(x = 0, y = 0, z = 0, w = 0) {
  var total = x + y + z + w;
  console.log(total);
}

function extraNumbers(x = 2, ...args) {
  return addNumbers(x, 40, ...args);
}
extraNumbers(3,8,11);*/
