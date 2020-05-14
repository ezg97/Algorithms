const threeSum = function(sum, target) {
    if (sum === []) {
      return [];
    }
  
    sum.sort();
    const arr = [];
    console.log(sum);
    for (let index in sum) {
      let num = sum[index];
      let left = parseInt(index) + 1;
      let right = sum.length - 1;
      console.log(sum[index]);
      console.log(sum[left]);
      console.log(sum[right]);
  
      while (left < right) {
        let total = (num + sum[left] + sum[right]);
        console.log(total, typeof(total));
        console.log(target, typeof(target));
        console.log((num + sum[left] + sum[right]) === parseInt(target));
        console.log('ran');
        if ((num + sum[left] + sum[right]) < target) {
          left++;
        }
        else if ((num + sum[left] + sum[right]) > target) {
          right--;
        }
        else if ((num + sum[left] + sum[right]) === parseInt(target)) {
          arr.push([num, sum[left], sum[right]]);
          left = right + 1;
        }
  
        console.log('new', sum[index]);
        console.log('new', sum[left]);
        console.log('new', sum[right]);
        
      }
    }
  
    return arr;
  }
  
  console.log(threeSum([2,2,7,-5,1,1,1,6, -4], 3));