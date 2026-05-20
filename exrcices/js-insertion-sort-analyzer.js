
function insertionSortAnalyzer(arr, comparator) {
  let iteration = 0;
  let swaps = 0;
  
  for (let i = 0; i < arr.length; i++){
    let j = i
    while(j > 0){
      iteration++
      if (comparator(arr[j-1], arr[j])> 0){
        let temp = arr[j-1]
        arr[j-1] = arr[j]
        arr[j] = temp
        swaps++
        j--
      }else {
        break
      } 
    }
  }
  return {
    sortedArray: arr,
    iterations : iteration,
    swaps
  }
}
const comparator = (a, b) => a - b;

const result = insertionSortAnalyzer([5, 2, 4, 6, 1, 3], comparator);

console.log(result);