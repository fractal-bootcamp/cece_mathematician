const sortedNums = [1, 2, 13, 16, 37, 49, 66, 78, 190, 256, 288, 300];

const searchArray = (sortedNums: number[], g: number) => {
  // define target
  let i = g;
  // define start of array
  let startingIndex = 0;
  // define end of array
  let endingIndex = sortedNums.length - 1;
  // find the middle of array
  while (startingIndex < endingIndex) {
    let indexPoint =
      startingIndex + Math.floor(endingIndex - startingIndex / 2);
    // check if middle is the target
    if (sortedNums[indexPoint] === i) {
      console.log(`target: ${indexPoint}`);
      return indexPoint;
    }
    // if not decide which direction to take array on the next iteration
    if (i > sortedNums[indexPoint]) {
      startingIndex = indexPoint + 1;
    } else {
      endingIndex = indexPoint - 1;
    }
  }
  console.log("no target");
  return;
};

searchArray(sortedNums, 66);
