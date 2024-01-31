public class Solution {
    public int[] ProductExceptSelf(int[] nums) {
        int[] prefixSum = new int[nums.Length];
        int len = nums.Length;
        var multi = 1;


        for (int i = 0; i < len; i++)
        {
            prefixSum[i] = multi;
            multi *= nums[i];
        }
        multi =1;
        for (int i = len -1 ; i >= 0 ; i--)
        {
            prefixSum[i] *= multi;
            multi *= nums[i];
        }
    
        return prefixSum;
    }

    
}