const twoSum = function(sum, target) {
    if (sum === []) {
      return [];
    }
    let pointer = 0;
    for (let index in sum) {
      pointer = parseInt(index) + 1;
      while (pointer < sum.length) {
        if (sum[index] + sum[pointer] === target) {
          return [sum[index], sum[pointer]];
        }
        pointer++;
      }
    }
  
    return [];
  }
  
  console.log(twoSum([3,4,8,2], 6));