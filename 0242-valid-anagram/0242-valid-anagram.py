class Solution:

    def isAnagram(self, s: str, t: str) -> bool:
        

        if len(t) != len(s):
            return False

        maHash = {}

        for char in s:
            maHash[char] = maHash.get(char, 0) + 1
        for char in t:
            maHash[char] = maHash.get(char, 0) - 1

        return all(count == 0 for count in maHash.values())

        return False