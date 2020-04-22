const binarySearch = function(nums, target) {
    let hi = nums.length - 1;
    let low = 0;
    while (low <= hi) {
      let mid = ~~((low + hi) / 2);
      if (nums[mid] === target) return mid;
      if (nums[mid] < target) low = mid + 1;
      else hi = mid - 1;
     
    }
    return low;
  
  }
  
  let nums = [1,2,4,7,9,10,14];
  binarySearch(nums, 2);