const twoSum = function(sum, target) {
    if (sum === []) {
      return [];
    }
    let table = {};
    for (let index in sum) {
      console.log(index+') current:',sum[index]);
      let currentNum = parseInt(sum[index]);
      let want = parseInt(target) - currentNum;
      console.log(index+') want:', want);
      if (table[currentNum] === undefined) {
        console.log('dont exist');
        table[currentNum] = parseInt(index);
        console.log(index+') saved as current?:', table[currentNum]);
      }
      console.log(index+') table[want]:', table[want]);
      if (table[want] !== undefined && want !== currentNum) {
        console.log('table', table);
        return [parseInt(index), table[want]];
      }
  
    }
  
    return [];
  }
  
  console.log(twoSum([3,4,8,-2], 6));