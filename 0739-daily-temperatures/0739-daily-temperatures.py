class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        lng = len(temperatures)
        out = [0]*lng
        cache = []

        for i in range(lng):
            while cache and temperatures[i] > temperatures[cache[-1]]:
                val = cache.pop()
                out[val] = i - val
            cache.append(i)
        return out