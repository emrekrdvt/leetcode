public class Solution {
    public bool ContainsDuplicate(int[] nums) {
        HashSet<int> hash = new HashSet<int>();

        foreach ( int x in nums)
        {
            if (hash.Contains(x))
                return true;
            hash.Add(x);
        }
        return false;
    }
}