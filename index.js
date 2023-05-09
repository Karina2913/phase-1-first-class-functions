const { spy } = require("chai");

function receivesAFunction(spy) {
    spy();
}

function returnsANamedFunction() {
    return function namedFunction() {console.log("I'm named!");}
}

function returnsAnAnonymousFunction() {
    return function() {console.log("I'm anonymous!");}
}