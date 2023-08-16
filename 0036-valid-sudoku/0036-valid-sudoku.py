class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        rows = [[0] * 9 for _ in range(9)]
        cols = [[0] * 9 for _ in range(9)]
        boxes = [[0] * 9 for _ in range(9)]

        for i in range(9):
            for j in range(9):
                if board[i][j] == '.':
                    continue
                num = int(board[i][j]) -1 
                boxId = (i // 3) * 3 + j // 3
                if rows[i][num] or cols[j][num] or boxes[boxId][num]:
                    return False
                rows[i][num] = 1
                cols[j][num] = 1
                boxes[boxId][num] = 1
        return True