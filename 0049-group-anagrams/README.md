`["eat","tea","tan","ate","nat","bat"]` bunlari alfabetik sıralayip kendime bir key üretmek amacıyla bir method yazıp hashmapimin valuesi olarak o keyi kullanmak istiyorum 
`private string createKey(string str)
    {
        return String.Concat(str.OrderBy(c=>c));
    }
` bu fonksiyon ile bunu yapıyorum.
hashmapim key ve string listeden oluşuyor o keye ait değer yoksa yeni bir string listesi oluşuturp gelen stringleri o listeye atıyorum. 
