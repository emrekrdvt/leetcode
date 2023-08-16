/**
 * @param {string} s
 * @return {boolean}
 */


isAlpha = (c) => {
    return (
        ('A' <= c && c <= 'Z') ||
        ('a' <= c && c <= 'z') ||
        ('0' <= c && c <= '9')
    );
}

var isPalindrome = function (s) {
    let left = 0;
    let right = s.length -1 ;

    while (left < right) {
        while (left < right && !isAlpha(s[left]))
            left += 1
        while (left < right && !isAlpha(s[right]))
            right -= 1
        if (s[left].toLowerCase() !== s[right].toLowerCase())
            return false
        left += 1;
        right -= 1;
    }
    return true;

};