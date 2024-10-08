/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
    var _promise1 = await promise1;
    var _promise2 = await promise2;
    return _promise1 + _promise2;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

 async function sleep(millis) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, millis);
    });
}
