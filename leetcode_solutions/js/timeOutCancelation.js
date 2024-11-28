/**
 * 
 * @param{Function} fn
 * @param{Function} args
 * @param{Function} t
 * @return {Function}
 * 
 */

var cancellable = function(fn, args, t) {
    let timeout = setTimeout(() => {
        fn(...args)
    }, t)
    
    return function() {
        clearTimeout(timeout);
    }
}
