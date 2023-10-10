/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {

    const lng = temperatures.length
    var out = new Array(lng).fill(0)
    var cache = []

    for (let i = 0; i < lng; i++) {
        while (cache.length > 0 && temperatures[i] > temperatures[cache[cache.length - 1]])
        {
            const val = cache.pop()
            out[val]= i - val
        }
        cache.push(i)
    }
    return out
};