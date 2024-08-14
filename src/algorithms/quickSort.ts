import { AnimationArrayType } from "@/lib/types";

function runQuickSort(
  array: number[],
  animation: AnimationArrayType,
  low: number,
  high: number
) {
  if (low < high) {
    let pIndex = partition(array, animation, low, high);
    runQuickSort(array, animation, low, pIndex - 1);
    runQuickSort(array, animation, pIndex + 1, high);
  }
}

function partition(
  array: number[],
  animation: AnimationArrayType,
  low: number,
  high: number
) {
  let pivot = array[low];
  let i = low;
  let j = high;

  while (i < j) {
    while (array[i] <= pivot && i < high) {
      animation.push([[i], false]);
      i++;
    }
    while (array[j] > pivot && j > low) {
      animation.push([[j], false]);
      j--;
    }
    if (i < j) {
      animation.push([[i, array[j]], true]);
      animation.push([[j, array[i]], true]);
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  animation.push([[low, array[j]], true]);
  animation.push([[j, array[low]], true]);
  [array[low], array[j]] = [array[j], array[low]];

  return j;
}

export function generateQuickSortAnimationArray(
  isSorting: boolean,
  array: number[],
  runAnimation: (animation: AnimationArrayType) => void
) {
  if (isSorting) return;
  if (array.length <= 1) return;

  const animations: AnimationArrayType = [];
  const auxiliaryArray = array.slice();
  runQuickSort(auxiliaryArray, animations, 0, array.length - 1);
  runAnimation(animations);
}
