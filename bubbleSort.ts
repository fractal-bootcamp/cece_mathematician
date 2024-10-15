const unsortedArray = [1, 2, 42, 24, 23, 54, 23, 66, 3, 12];
const bubbleSort = (unsortedArray) => {
  // outer
  for (let i = 1; i < unsortedArray.length; i++) {
    for (let j = 0; j < unsortedArray.length - i; j++) {
      if (unsortedArray[j] > unsortedArray[j + 1]) {
        // destructuring comparison
        [unsortedArray[j], unsortedArray[j + 1]] = [
          unsortedArray[j + 1],
          unsortedArray[j],
        ];
        console.log(`swapped ${unsortedArray[j]} with ${unsortedArray[j + 1]}`);
      }
    }
    console.log(unsortedArray);
  }
  return unsortedArray;
};

bubbleSort(unsortedArray);
