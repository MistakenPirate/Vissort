import { AnimationArrayType } from "@/lib/types";

function runSelectionSort(array: number[], animation: AnimationArrayType) {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      animation.push([[j, i], false]);
      if (array[j] < array[min]) min = j;
    }
    animation.push([[i, array[min]], true]);
    animation.push([[min, array[i]], true]);
    [array[min], array[i]] = [array[i], array[min]];
  }
}

export function generateSelectionSortAnimationArray(
  isSorting: boolean,
  array: number[],
  runAnimation: (animation: AnimationArrayType) => void
) {
  if (isSorting) return;
  if (array.length <= 1) return;

  const animations: AnimationArrayType = [];
  const auxiliaryArray = array.slice();
  runSelectionSort(auxiliaryArray, animations);
  runAnimation(animations);
}
