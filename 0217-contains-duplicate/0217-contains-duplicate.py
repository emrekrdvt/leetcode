class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:

        newArr = set()

        for n in nums:
            if n in newArr:
                return True
            newArr.add(n)
        return False