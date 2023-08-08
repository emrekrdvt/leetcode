class Solution:
    def createKey(self, s):
        key = tuple(sorted(s))
        return key


    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        grp = dict()

        for value in strs:
            key = self.createKey(value)
            if grp.get(key) is None:
                grp[key] = [value]
            else:
                grp[key].append(value)

        return list(grp.values())