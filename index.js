function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction(Julian) {
    return function namedFunction(Julian) {
    };
}

function returnsAnAnonymousFunction() {
    return function() {

};
}