public class Solution {
    public bool Check(char c)
    {
            return (c >= 'a' && c <= 'z') ||
               (c >= 'A' && c <= 'Z') ||
               (c >= '0' && c <= '9');
    }

    public bool IsPalindrome(string s) {
        var sLen = s.Length;
        int left = 0;
        int right = sLen-1;

        while (left < right)
        {
            while (left<right && !Check(s[left]))
                left++;
            while (left<right && !Check(s[right]))
                right--;
            if (char.ToLower(s[left]) != char.ToLower(s[right]))
                return false;
            left++;
            right--;
        }
        return true;
    }
}