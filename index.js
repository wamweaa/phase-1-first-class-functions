function receivesAFunction(callback) {
    callback()
}
function returnsANamedFunction() {
    return namedFunction;
    function namedFunction() {
        console.log();
    }
}
function returnsAnAnonymousFunction(){
    return function(){
        
    }
}
