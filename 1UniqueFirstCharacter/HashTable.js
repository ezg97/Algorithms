function firstUC(string) {
  if (string === "") {
    return "";
  }

  string = string.toLowerCase()
  let hash = {};
  for (index in string) {
    if(hash[string[index]] === undefined) {
      hash = {...hash, [`${string[index]}`]: 1}
    }
    else{
      hash[string[index]]++;

    }
  }
  for (key in hash) {
    if(hash[key] === 1){
      return key;
    }
  }
  return -1;
}

console.log(firstUC('Running thru'));