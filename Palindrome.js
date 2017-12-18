
function palindrome(str) {

  var newStr= str.replace(/\W|_/gi,"");
  newStr= newStr.toLowerCase();
  
  var i=0, j=newStr.length -1; 
  
  while(i<j && newStr[i]==newStr[j]){
    
    i++;
    j--;
  }
  //console.log(newStr);
  
  if (i>=j)
    return true;
  else 
    return false;
}

palindrome("A man, a plan, a canal. Panama");
