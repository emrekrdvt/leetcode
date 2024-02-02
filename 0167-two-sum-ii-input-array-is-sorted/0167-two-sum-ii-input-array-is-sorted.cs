public class Solution {
    public int[] TwoSum(int[] numbers, int target) {
        int slen = 0;
        int rlen = numbers.Length - 1;

        while (slen<rlen)
        {
            int currentsum = numbers[slen] +  numbers[rlen] ;
            if (currentsum == target)
                return new int[]{slen+1,rlen+1};
            else if (currentsum<target)
                slen++;
            else
                rlen--;
        }
        return new int[]{slen+1,rlen+1};
    }
}