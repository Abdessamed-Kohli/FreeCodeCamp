
function findLongestWord(str) {
  return str.split(" ").sort( function(a,b){ return b.length - a.length;})[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
