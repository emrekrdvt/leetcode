/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {

    const rows = new Array(9).fill(0).map(() => Array(9).fill(0));
    const cols = new Array(9).fill(0).map(() => Array(9).fill(0));
    const boxes = new Array(9).fill(0).map(() => Array(9).fill(0));

    for (let i = 0; i < 9 ; i++)
    {
        for (let j = 0; j<9; j++)
        {
            if (board[i][j] !== '.')
            {
                const num = parseInt(board[i][j])
                const boxId = Math.floor(i / 3 ) *3 + Math.floor(j / 3)
                if (rows[i][num] || cols[j][num] || boxes[boxId][num])
                    return false;
                rows[i][num] = 1;
                cols[j][num] = 1;
                boxes[boxId][num] =1 ;
            }
        }
    }
    return true

}
