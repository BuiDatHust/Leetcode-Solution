// Problem 205 -Easy
// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Idea: 
// tao 4 mang , arr1 va arr2 dung de luu tan suat xuat hien hien tai cua ky tu tai vi tri i.
// arr3 va arr4 dung de luu tan suat xuat hien tinh tu dau chuoi cua ky tu tai vi tri i 
// dieu kien de check la arr1 vaf arr2 tai vi tri i phai bang nhau va arr3 vaf arr4 cung vay neu khong se ko nhat quan trong viec thay the dan den ko the thay the ky tu
// Time complex O(n) space complex O(n)
var isIsomorphic = function(s, t) {
    let arr1=[1], arr2=[1] ,arr3=[] ,arr4=[]

    if( s.length !== t.length) return false 

    for(let i=1 ;i<s.length; i++){
        if( !arr3[s[i]] ) arr3[s[i]] = 1
        else arr3[s[i]] +=1
        if( s[i]==s[i-1] ) arr1.push(arr1[i-1]+1);
        else arr1.push(1)

        if( t[i]==t[i-1] ) arr2.push(arr2[i-1]+1);
        else arr2.push(1)
        if( !arr4[t[i]] ) arr4[t[i]] = 1
        else arr4[t[i]] +=1
        console.log(arr1,arr2)

        if( arr1[i]!=arr2[i]  || arr3[s[i]]!=arr4[t[i]] ) return false
    }

    return true
};

console.log(isIsomorphic("13","42"))