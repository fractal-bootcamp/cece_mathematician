const unsortedArray = [1, 2, 42, 24, 23, 54, 23, 66, 3, 12];

const bubbleSort = (unsortedArray) => {
  // outer
  for (let i = 1; i < unsortedArray.length; i++) {
    // swapped = false;
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

type Swap = [number, number];

// Define a function to perform bubble sort
const wrappedBubbleSort = (array: number[]) => {
  let swaps: Swap[] = [];
  let swapCount = 0;

  const bubbleSort2 = (array: number[]): number[] => {
    const sortedArray = [...array];

    // Outer loop: Repeat passes through the list
    for (let outer = 0; outer < sortedArray.length; outer++) {
      let noSwaps = true;

      // Inner loop: Compare adjacent items
      for (let inner = 0; inner < sortedArray.length - outer; inner++) {
        // PLACE
        const currentItem = sortedArray[inner];
        const nextItem = sortedArray[inner + 1];

        // Swap items if the current item is greater than the next item (for ascending order)
        if (currentItem > nextItem) {
          [sortedArray[inner], sortedArray[inner + 1]] = [
            sortedArray[inner + 1],
            sortedArray[inner],
          ];

          swaps.push([currentItem, nextItem]);
          swapCount++;

          // SWAP
          noSwaps = false;
        }
      }

      // After each pass, the largest element "bubbles" to the correct position
      // If no swaps were made in this pass, the list is sorted
      if (noSwaps) {
        return sortedArray;
      }
      noSwaps = true;
    }

    return sortedArray;
  };
  return {
    sorted: bubbleSort2(array),
    swapCount,
    swaps,
  };
};
const unsortedArrayBIG = [
  723, 129, 845, 312, 467, 587, 901, 234, 678, 543, 890, 456, 789, 321, 654,
  987, 210, 543, 876, 345, 678, 901, 234, 567, 890, 123, 456, 789, 12, 345, 678,
  901, 234, 567, 890, 123, 456, 789, 321, 654, 987, 210, 543, 876, 109, 432,
  765, 198, 531, 864, 297, 630, 963, 396, 729, 62, 395, 728, 61, 394, 727, 60,
  393, 726, 59, 392, 725, 58, 391, 724, 57, 390, 723, 56, 389, 722, 55, 388,
  721, 54, 387, 720, 53, 386, 719, 52, 385, 718, 51, 384, 717, 50, 383, 716, 49,
  382, 715, 48, 381, 714, 47, 380, 713,
];

console.log(wrappedBubbleSort(unsortedArrayBIG));
