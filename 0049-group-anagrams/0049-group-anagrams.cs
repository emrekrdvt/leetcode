public class Solution 
{
    private string createKey(string str)
    {
        return String.Concat(str.OrderBy(c=>c));
    }


    public IList<IList<string>> GroupAnagrams(string[] strs) {
        Dictionary<string, List<string>> myDict = new Dictionary<string, List<string>>();
        foreach(var a in strs)
        {
            var key = createKey(a);
            if(!myDict.ContainsKey(key))
                myDict[key] = new List<string>();
            myDict[key].Add(a);
        }
        return myDict.Values.ToList<IList<string>>();
    }
}