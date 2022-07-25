//maybe monads
var someObj = { something: { else: { entirely: 42 } } }
//someObj.something.else.entirely;//42
//nothing monad
function Nothing() {
    return{map:Nothing, chain:Nothing, ap:Nothing}
}

var Maybe = { Just, Nothing, of: Just }
//from nullabe monad
function fromNullable(val) {
    if (val == null) return Maybe.Nothing();
    else return Maybe.of(val);
}
//prop
var prop = curry(2, functiom prop(prop, obj){
    return fromNullable(obj[prop])
})
Maybe.of(someObj)





var user1 = Just('kyle')
var user2 = Just("Susan")

var tuple = curry(2, function tuple(x, y) {
    return[x,y]
})
var users = user1.map(tuple).ap(user2)

users.chain(identity)



var fortyOne = Just(41)
var fortyTwo = fortyOne.map(function inc(v) {
    return v + 1
})
function identity(v) {
    return v;
}

fortyOne.chain(identity);
fortyTwo.chain(identity)





function Just(val) {
    return {map,chain ,ap}
}

function map(fn) {
    return Just(fn(val))
}
//aka:vind,flatMap
function chain(fn) {
    return fn(val)
}

function ap(anotherMonad) {
    return anotherMonad.map(val)
}