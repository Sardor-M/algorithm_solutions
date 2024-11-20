/**
 *  Add Two Promises
 * 
 *  Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will
 *  both resolve with a number. The returned promise should resolve with the sum of the two numbers.
 * 
 **/

/**
 * 
 * Solution 1
 * 
 */

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    const [val1, val2] = Promise.all([promise1, promise2]);
    return val1 + val2;
}


/**
 * 
 * Solution 2
 * 
 */

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    let sum = 0;
    return Promise
        .all([promise1, promise2])
        .then(([val1, val2]) => sum = val1 + val2);
}