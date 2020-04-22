const isPalindrome = function(s) {
    const san = s.replace(/[^\w]/gi, '').toLowerCase();
    return san.split('').reverse().join('') === san;
  };
  
  isPalindrome('Helle \][]**h');