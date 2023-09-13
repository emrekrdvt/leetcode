/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const operators = ['+', '-', '/', '*']
    const numberArr = []

    tokens.forEach(op => {
        if (!isNaN(op))
            numberArr.push(parseInt(op))
        else if (numberArr.length > 1 && operators.includes(op)) {
            let n2 = numberArr.pop()
            let n1 = numberArr.pop()
            let add = 0
            switch (op) {
                case "+":
                    add = n1 + n2
                    numberArr.push(parseInt(add))
                    break;
                case "/":
                    add = n1 / n2
                    numberArr.push(parseInt(add))
                    break;
                case "-":
                    add = n1 - n2
                    numberArr.push(parseInt(add))
                    break;
                case "*":
                    add = n1 * n2
                    numberArr.push(parseInt(add))
                    break;
            }
        }
    })
    return (numberArr)

};