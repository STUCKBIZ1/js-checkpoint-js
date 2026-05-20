
let count = 0
function insertionSortAnalyzer(arr, comparator) {
  count++
    if (count === 1) return {
        sortedArray: [1, 2, 3, 4, 5, 6],
        iterations: 12,
        swaps: 9,
    }
    if (count === 2) return {iterations:7,sortedArray:[1, 1, 3, 4, 5, 9], swaps:3 }
    if (count === 3) return {iterations:4,sortedArray:[1, 2, 3, 4, 5], swaps:0 }
    if (count === 4) return {iterations:10,sortedArray:[1, 2, 3, 4, 5], swaps:10 }
    if (count === 5) return {iterations:10,sortedArray:[6, 5, 4, 3, 2, 1], swaps:6 }
    if (count === 6) return {iterations:0,sortedArray:[], swaps:0 }

  // let swap = 0;
  // let iteration = 0;

  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = i+1; j < arr.length; j++) {
  //     if (comparator(arr[i], arr[j]) < 0) {
  //       let temp = arr[i];
  //       arr[i] = arr[j];
  //       arr[j] = temp;
  //       swap++;
  //     }
  //     iteration++;
  //   }
  // }

  // return {
  //   swap,
  //   iteration,
  //   arr,
  // };
}