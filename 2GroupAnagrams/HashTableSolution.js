const groupAnagrams = function(stra) {
    if (stra.length === 0) return [];
  
    //initialize hash table
    const ht = {};
    //loop through array of strings
    for (let str of stra) {
      //sort string
      const sorted = str.split('').sort().join('');    
      //if string is in hashtable, add to array
      if (ht[sorted]) ht[sorted].push(str);
      //if it's not in hashtable, add
      else ht[sorted] = [str]
    }
  
    return Object.values(ht);
  
  };
  
  groupAnagrams(['ha','ho','hu','ah','uh','he','oh']);