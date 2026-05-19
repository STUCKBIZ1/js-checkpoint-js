function insertionSortAnalyzer(arr, comparator) {
  let swap = 0;
  let iteration = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (comparator(arr[i], arr[j]) < 0) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        swap++;
      }
      iteration++;
    }
  }

  return {
    swap,
    iteration,
    arr,
  };
}
const comparator = (a, b) => a - b;

const result = insertionSortAnalyzer([5, 2, 4, 6, 1, 3], comparator);

console.log(result);