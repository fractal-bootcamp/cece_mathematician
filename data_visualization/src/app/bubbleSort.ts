type Swap = [number, number];

export const wrappedBubbleSort = (array: number[]) => {
  let swaps: Swap[] = [];
  let swapCount = 0;

  // Core implementation of SORT algo
  // Define a function to perform bubble sort
  const bubbleSort2 = (array: number[]): number[] => {
    // takes an array of numbers and promises to return an array of numbers
    const sortedArray = [...array]; // take original array and create a new array to avoid modifying original

    // Outer loop: Repeat passes through the list
    for (let outer = 0; outer < sortedArray.length; outer++) {
      let noSwaps = true; // assumes no swaps are needed before each pass

      // Inner loop: Compare adjacent items
      for (let inner = 0; inner < sortedArray.length - outer; inner++) {
        // - outer ~ dont need to check outer elements in each pass
        // PLACE
        const currentItem = sortedArray[inner];
        const nextItem = sortedArray[inner + 1];

        // Swap items if the current item is greater than the next item (for ascending order)
        if (currentItem > nextItem) {
          [sortedArray[inner], sortedArray[inner + 1]] = [
            sortedArray[inner + 1],
            sortedArray[inner],
          ];
          // keep track of what swaps and how many
          swaps.push([currentItem, nextItem]);
          swapCount++;

          // if we made a swap - noSwaps should be false
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
// const unsortedArrayTEST = [
//   723, 129, 845, 312, 467, 587, 901, 234, 678, 543, 890, 456, 789, 321, 654,
//   987, 210, 543, 876, 345, 678, 901, 234, 567, 890, 123, 456, 789, 12, 345, 678,
//   901, 234, 567, 890, 123, 456, 789, 321, 654, 987, 210, 543, 876, 109, 432,
//   765, 198, 531, 864, 297, 630, 963, 396, 729, 62, 395, 728, 61, 394, 727, 60,
//   393, 726, 59, 392, 725, 58, 391, 724, 57, 390, 723, 56, 389, 722, 55, 388,
//   721, 54, 387, 720, 53, 386, 719, 52, 385, 718, 51, 384, 717, 50, 383, 716, 49,
//   382, 715, 48, 381, 714, 47, 380, 713,
// ];

// console.log(wrappedBubbleSort(unsortedArrayTEST));
