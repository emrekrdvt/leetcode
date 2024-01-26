public class Solution {
    public bool IsAnagram(string s, string t) {

        if(s.Length != t.Length)
            return false;

        var maHash = s.GroupBy(c => c).ToDictionary(d => d.Key, d => d.Count());

        foreach (var a in t)
        {
            if(!maHash.TryGetValue(a, out var count) || count ==0)
                return false;
            maHash[a]--;
        }
        return true;
    }
}