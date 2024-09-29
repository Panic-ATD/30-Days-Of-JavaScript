/** 2626 Array Reduce Transformation, the reduce function iterates through an array, applying a callback function to accumulate a result starting from an initial value.
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    var acc = init;
    for (var i = 0; i < nums.length; i++) {
        acc = fn(acc, nums[i]);
    }
    return acc;
};
