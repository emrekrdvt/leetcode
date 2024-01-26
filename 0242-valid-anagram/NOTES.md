```var maHash = s.GroupBy(c => c).ToDictionary(d => d.Key, d => d.Count());```
ile `s` stringindeki verileri gruplayip her karakter icin ayri birer grup olustuyorum. `s="lale"` oldugunu dusunursek 
`Key: l, Count: 2
  Item: l
  Item: l
Key: a, Count: 1
  Item: a
Key: e, Count: 1
  Item: e
` yani 
`{
  {'l', 2},
  {'a', 1},
  {'e', 1}
}`
oluyor.
Foreach ile harfleri tek tek gezip
` 
foreach (var a in t)
        {
            if(!maHash.TryGetValue(a, out var count) || count ==0)
                return false;
            maHash[a]--;
        }`
maHash Dictionarysinde bulunan `a` anahtarinin degerini count'a atip true doner. Eger `a` anahtari maHash icinde bulunuyorsa count degerini 1 azaltir ve devam eder.
