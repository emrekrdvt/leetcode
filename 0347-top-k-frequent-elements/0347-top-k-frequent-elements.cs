public class Solution {
    public int[] TopKFrequent(int[] nums, int k) {
        Dictionary<int, int> myHash = new Dictionary<int, int>();

        foreach(var n in nums)
        {
            if (!myHash.ContainsKey(n))
                myHash[n] = 1;
            else
                myHash[n]++;
        }

        List<KeyValuePair<int, int>> sortedList = new List<KeyValuePair<int, int>>(myHash);
        sortedList.Sort((x, y) => y.Value.CompareTo(x.Value));


        int[] res = new int[k];
        for (int i = 0; i < k; i++) {
            res[i] = sortedList[i].Key;
        }

        return res;
    }
}