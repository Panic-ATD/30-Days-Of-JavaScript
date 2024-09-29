/** 2634. Filter Elements from Array, This function filters elements from an array based on a provided callback function (fn), iterating through the array and pushing elements that satisfy the condition into a new array.
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    var _array = [];
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) _array.push(arr[i]);
    }
    return _array;
};
