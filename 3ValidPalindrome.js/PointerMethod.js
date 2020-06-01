const isPalindrome = function(s) {
    s = s.replace(/[^\w]/gi, '').toLowerCase();
    let left = 0;
    let right = s.length-1;
    while (left < right) {
      if(s[left] !== s[right]) return false;
      left++;
      right--;
    }
    return true;
  };
  
  isPalindrome('Helle \][]**h');