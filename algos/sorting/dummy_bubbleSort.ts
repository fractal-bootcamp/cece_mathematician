

const bubbleSor = []
    let swapped = false;
    // clone original array to avoid modifying input
    const array = [...originalArray];

    // Outer loop: each pass through array
    // 'i' represents the number of passes through the array
    // SAME STATEMENT: (i += 1) ; (i = i + 1) ; (i ++)
    for (let i = 1; i < array.length; i += 1) {
      // starting from 1 because after first pass, largest element will be in last position

      swapped = false;

    
      // Inner loop: COMPARE adjacent elements
      // as 'i' increases --> inner loop runs fewer times bc after each pass one more element is guaranteed at the end
      // (j < array.length - i): here we - i (# of passes) so we avoid comparisions at the end of array where elements are already sorted
      for (let j = 0; j < array.length - i; j += 1) {
        // compare adjacent elements


        // if current element is greater than next, swap them
          // destructing assignment for swapping
          /*  [array[j], array[j+1]]  ---- LEFT side is unpacking values back into original array positions 
                        = [array[j + 1], array[j]] ---- RIGHT side is creating new temp array with elements swapped  */
          // array[j] refers to the actual element in the array at index j
          [array[j], array[j + 1]] = [array[j + 1], array[j]]; // we are swapping elements at positions j & j + 1 in array
          // 3, 4 = 4, 3

          // set flag to true as swap occurs
          swapped = true;
        }
      }
      // if no swap in this pass, array is sorted
      if (!swapped) {
        // exit outer early
        return array;
      }
    }
    // return sorted
    return array;
  }
}
