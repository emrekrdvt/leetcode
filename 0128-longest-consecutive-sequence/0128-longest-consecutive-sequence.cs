public class Solution {
    public int LongestConsecutive(int[] nums) {
        HashSet<int> numSet = new HashSet<int>();
        foreach (int num in nums) {
            numSet.Add(num);
        }
        int maxLen = 0;

        foreach(int num in numSet)
        {
            if(!numSet.Contains(num-1))
            {
                int currentNum = num;
                int currentLen = 1;

                while (numSet.Contains(currentNum+1))
                {
                    currentNum++;
                    currentLen++;
                }
                maxLen = Math.Max(maxLen,currentLen);
            }

        }

        return maxLen;
    }
}