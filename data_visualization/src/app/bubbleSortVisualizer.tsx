"use client"; // tells next.js that this is a client component - allows for react hooks
import React, { useState, useEffect } from "react";
import { wrappedBubbleSort } from "./bubbleSort";

// define interface node
interface Node {
  value: number;
  index: number; // current position
  isComparing: boolean; // current comparison
  isSwapping: boolean; // current swap
}

// create component
// STATE
const BubbleSortVisualizer: React.FC = () => {
  // each node in this array represents one element in our visualization with Node type properties
  const [nodes, setNodes] = useState<Node[]>([]); // stores our array of Node objects to be visualized and sorted
  // nodes state holds our current array of Node objects
  const [sorting, setSorting] = useState(false); // sorting: boolean -- indicate whether sorting process is running

  const initializeArray = () => {
    // function to initialize array for any inputted data
    /* create an array of node objects where each node has: 
    1- random value b/w 1-100
    2- an index
    3 - isComparing flag
    4 - isSwapping flag   */
    const newNodes: Node[] = Array.from({ length: 50 }, (_, index) => ({
      // '_' is a convention for an unused parameter
      // for each node in array -

      //start with an unsorted array
      value: Math.floor(Math.random() * 100) + 1, // generate random numbers to use in an unsorted array -> visualize the sorting process
      // keep track of original position of each element
      index, // assigns current index to the index property of our node - current index in the array we are creating

      isComparing: false, // initial false - bc when array is first created no compare or swaps are happening
      isSwapping: false, // initial false
    }));
    console.log(newNodes);
    // update node state
    setNodes(newNodes); // store this array in the components state
  };

  // create an initial array of random numbers
  const visualizeBubbleSort = async () => {
    // use async to create visible delays
    // manage state of our component to indicate we are in 'sorting' phase
    setSorting(true);
    // copy nodes array to avoid direct mutation
    let nodesCopy = [...nodes]; // allows us to modify

    // get the swaps performed from wrappedBubbleSort - map nodes to values
    const { sorted, swaps, swapCount } = wrappedBubbleSort(
      nodesCopy.map((node) => node.value)
    );

    // iterate through each swap performed by the sorting algorithm
    for (let sortSwap = 0; sortSwap < swaps.length; sortSwap++) {
      // destructure the 'from' and 'to' values of current swap
      // from = being swapped from current ; to = being swapped to new position
      const [from, to] = swaps[sortSwap];

      // find indices of the node with these values in nodesCopy array
      // comparison & swapping logic
      const fromIndex = nodesCopy.findIndex((node) => node.value === from);
      const toIndex = nodesCopy.findIndex((node) => node.value === to);

      // Comparison visualization
      // set nodes being compared flag to true
      nodesCopy[fromIndex].isComparing = true;
      nodesCopy[toIndex].isComparing = true;

      // update state in UI
      setNodes([...nodesCopy]);
      // await 50 ms to make visible
      await new Promise((resolve) => setTimeout(resolve, 50));

      // Swapping visualization
      nodesCopy[fromIndex].isSwapping = true;
      nodesCopy[toIndex].isSwapping = true;
      // update state in UI
      setNodes([...nodesCopy]);
      // await 50 ms to make visible
      await new Promise((resolve) => setTimeout(resolve, 50));

      // perform swap in nodesCopy array by destructuring assignment
      [nodesCopy[fromIndex], nodesCopy[toIndex]] = [
        nodesCopy[toIndex],
        nodesCopy[fromIndex],
      ];

      // reset visualization states
      // set flags back to false after swap
      nodesCopy[fromIndex].isComparing = false;
      nodesCopy[toIndex].isComparing = false;
      nodesCopy[fromIndex].isSwapping = false;
      nodesCopy[toIndex].isSwapping = false;
      // update state
      setNodes([...nodesCopy]);
    }
    // after all swaps complete - update state with final sorted array
    setNodes(nodesCopy);
    // set sorting state back to false
    setSorting(false);
  };

  useEffect(() => {
    initializeArray();
  }, []);

  // component logic

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-end h-64 mb-4">
        {nodes.map((node, index) => (
          <div
            key={index}
            className={`w-2 mx-px transition-all duration-50 ${
              node.isComparing
                ? "bg-yellow-500"
                : node.isSwapping
                ? "bg-red-500"
                : "bg-blue-500"
            }`}
            style={{ height: `${node.value * 2}px` }}
          ></div>
        ))}
      </div>
      <button
        onClick={visualizeBubbleSort}
        disabled={sorting}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
      >
        {sorting ? "Sorting..." : "Start Bubble Sort"}
      </button>
    </div>
  );
};

export default BubbleSortVisualizer;
