
function palindrome(str) {

  var newStr= str.replace(/\[W_]/gi,"");
  newStr= newStr.toLowerCase();
  
  var i=0, j=newStr.length -1; 
  while(i<j && newStr[i]==newStr[j]){
    
    i++;
    j--;
  }
  
  if (i>=j)
    return true;
  else 
    return false;
}

palindrome("A man, a plan, a canal. Panama");

Short answer 
function palindrome(str) {
  var normalizedStr = str.replace(/[\W_]/g, '').toLowerCase();
  var reverseStr = normalizedStr.split('').reverse().join('');
  return normalizedStr === reverseStr;
}

