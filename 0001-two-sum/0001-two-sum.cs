public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        int nL = nums.Length;
        Dictionary<int, int> dict = new Dictionary<int, int>(nL);
       
       for (int i=0; i<nL; i++)
       {
           int diff = target - nums[i];
           if(dict.ContainsKey(diff))
               return new int[] {i, dict[diff]};
            dict[nums[i]]= i;
       }
       return new int[] {0,0};
    }
}