# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def evaluateTree(self, root: Optional[TreeNode]) -> bool:

        def evoNode(node: TreeNode) -> bool:
            if not node:
                return False
                
            if node.val in {0,1}:
                return bool(node.val)
            elif node.val == 2:
                return evoNode(node.left) or evoNode(node.right)
            elif node.val == 3:
                return evoNode(node.left) and evoNode(node.right)
            return False
        return evoNode(root)