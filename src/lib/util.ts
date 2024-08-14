import { generateBubbleSortAnimationArray } from "@/algorithms/bubbleSort";
import { AnimationArrayType, SortingAlgorithmType } from "./types";
import { MdDescription } from "react-icons/md";
import { generateQuickSortAnimationArray } from "@/algorithms/quickSort";

export const MIN_ANIMATION_SPEED = 10;
export const MAX_ANIMATION_SPEED = 400;

export function generateRandomNumberFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const algorithmOptions = [
  { label: "Bubble", value: "bubble" },
  { label: "Quick", value: "quick" },
  { label: "Merge", value: "merge" },
  { label: "Insertion", value: "insertion" },
  { label: "Selection", value: "selection" },
];

export const generateAnimationArray = (
  selectedAlgorithm: SortingAlgorithmType,
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: AnimationArrayType) => void
) => {
  switch (selectedAlgorithm) {
    case "bubble":
      generateBubbleSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "quick":
      generateQuickSortAnimationArray(isSorting, array, runAnimation);
      break;
    default:
      break;
  }
};

export const SortingAlgorithmData = {
  bubble: {
    title: "Bubble Sort",
    description:
      "Repeatedly swaps adjacent elements if they are in the wrong order.",
    worstCase: "O(n²)",
    averageCase: "O(n²)",
    bestCase: "O(n)",
  },
  insertion: {
    title: "Insertion Sort",
    description:
      "Builds the sorted array one element at a time by inserting each element into its correct position.",
    worstCase: "O(n²)",
    averageCase: "O(n²)",
    bestCase: "O(n)",
  },
  selection: {
    title: "Selection Sort",
    description:
      "Selects the smallest element from the unsorted part of the list and swaps it with the first unsorted element.",
    worstCase: "O(n²)",
    averageCase: "O(n²)",
    bestCase: "O(n)",
  },
  merge: {
    title: "Merge Sort",
    description:
      "Divides the array into halves, sorts them recursively, and then merges the sorted halves.",
    worstCase: "O(n log n)",
    averageCase: "O(n log n)",
    bestCase: "O(n log n)",
  },
  quick: {
    title: "Quick Sort",
    description:
      "Divides the array into sub-arrays based on a pivot and sorts them recursively.",
    worstCase: "O(n²)",
    averageCase: "O(n log n)",
    bestCase: "O(n log n)",
  },
};
