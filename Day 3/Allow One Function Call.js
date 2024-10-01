/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let f=0;
    return function(...args){
        if (f==0)
        {
            f=1;
            return fn(...args);
        }
        else
        {
            return undefined;
        }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
