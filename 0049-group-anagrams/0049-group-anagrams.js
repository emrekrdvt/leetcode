/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var createKey = (st) => {
    const key = [...st].sort().join("")
    return key
}

var groupAnagrams = function(strs) {
    const grp = {}
    
    for (const value of strs)
    {
        const key = createKey(value);
        if (!grp[key])
            grp[key] = [value]
        else
            grp[key].push(value);
    }
    return Object.values(grp)
};