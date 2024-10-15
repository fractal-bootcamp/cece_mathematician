// array destructuring
let i = 11,
  p = 1;
[i, p] = [p, i];
console.log(i, p); // output: (1, 11)


let arr = [1, 2, 3]; 
[arr[0], arr[2]] = [arr[2], arr[0]];
// 1, 3 = 3, 1
console.log(arr); // output: [3, 2, 1]

let bubbleArr = [5, 2, 8, 12, 1, 6];
[bubbleArr[0], bubbleArr[1]] = [bubbleArr[1], bubbleArr[0]];
console.log(bubbleArr); // output: [2,5,8,12,1,6]