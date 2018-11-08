/*
Lilah has a string, , of lowercase English letters that she repeated infinitely many times.

Given an integer, , find and print the number of letter a's in the first  letters of Lilah's infinite string.

For example, if the string  and , the substring we consider is , the first  characters of her infinite string. There are  occurrences of a in the substring.
*/

function repeatedString(s,n) {
  var occurances = 0;
  var occurancesInString = (s.match(/a/g) || []).length;

  occurances = occurancesInString*parseInt(n/s.length);
  occurances += (s.substring(0, n%s.length).match(/a/g) || []).length

  return occurances;
}

console.log(repeatedString('aba', 10))
//7
