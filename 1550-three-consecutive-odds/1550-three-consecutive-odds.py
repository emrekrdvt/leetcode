class Solution:
    def threeConsecutiveOdds(self, arr: List[int]) -> bool:

        if len(arr) < 3:
            return False
        

        for index, number in enumerate(arr,0):
            if arr[index] % 2 == 1:
                print(arr[index], index)
                if index+1 >= len(arr):
                    return False
                if arr[index-1] % 2 == 1 and arr[index+1] % 2 == 1 and index != 0:
                    return True
        return False