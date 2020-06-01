/* const validParentheses = function vp(str) {
  if (str === '') return false;
  const stack = [];
  for (let char of str) {
    if (char === '(' || char === '[' || char === '{') stack.push(char);
    else{
      if (stack.length == 0) return false;
      const last = stack.pop();
      if (last === "(" && char !== ')') return false;
      else if (last === "[" && char !== ']') return false;
      else if (last === "{" && char !== '}') return false;
    }
  }
  if (stack.length) return false;
  return true;
} */

const validParentheses = function vp(str) {
    if (str === '') return false;
    const stack = [];
    const pairs = {
      '(': ')',
      '[': ']',
      '{': '}'
    };
    for (let char of str) {
      if (char in pairs) stack.push(char);
      else{
        if (stack.length == 0) return false;
        const last = stack.pop();
        if (pairs[last] !== char) return false;
      }
    }
    if (stack.length) return false;
    return true;
  }
  
  validParentheses('[[({})]]');