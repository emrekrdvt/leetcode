/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let bra = {
        "(" : ")",
        "[" : "]",
        "{" : "}",
    }
    let stck = []
    let len = 0

    for (const c of s )
    {
        if(bra[c])
            stck.push(c)
        else if (bra[stck.pop()] !== c)
            return false
    }

    return !stck.length
};