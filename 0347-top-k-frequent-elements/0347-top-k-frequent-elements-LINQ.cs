public class Solution {
    public int[] TopKFrequent(int[] nums, int k) {
        var numHash = nums.GroupBy(c => c, EqualityComparer<int>.Default)
                      .ToDictionary(c => c.Key, d => d.Count());

        var res = numHash.OrderByDescending(point => point.Value)
                        .Take(k)
                        .Select(point => point.Key)
                        .ToArray();

        return res;
    }
}
