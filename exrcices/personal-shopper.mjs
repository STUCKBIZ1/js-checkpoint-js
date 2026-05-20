function insertionSortAnalyzer(arr, comparator) {
  const array = [...arr];

  let iterations = 0;
  let swaps = 0;

  for (let i = 1; i < array.length; i++) {
    let j = i;

    while (j > 0) {
      iterations++;

      if (comparator(array[j - 1], array[j]) > 0) {
        // swap
        let temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;

        swaps++;
        j--;
      } else {
        break;
      }
    }
  }

  return {
    sortedArray: array,
    iterations,
    swaps,
  };
}