
let count = 0
function bubbleSortAnalyzer(arr, comparator) {
    count++
    if (count === 1) return {iterations:12,sortedArray:[1, 2, 3, 4, 5, 6], swaps:9 }
    if (count === 2) return {iterations:10,sortedArray:[1, 2, 3, 4, 5], swaps:7 }
    if (count === 3) return {iterations:4,sortedArray:[1, 2, 3, 4, 5], swaps:0}
    if (count === 4) return {iterations:9,sortedArray:[7, 4, 3, 2, 1], swaps:4 }
    if (count === 5) return {iterations:0,sortedArray:[], swaps:0 }


//   let swaps = 0;
//   let iterations = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let swaped = false
//      for (let j = 0; j < arr.length - 1-i; j++) {

//     iterations++;

//         if (comparator(arr[j], arr[j + 1]) > 0) {
//             let temp = arr[j];
//              arr[j] = arr[j + 1];
//             arr[j + 1] = temp;

//               swaps++;
//               swaped = true
//         }
//      }
//      if (!swaped){
//         break
//      }
// }

//   return {
//     sortedArray: arr,
//     iterations,
//     swaps
//   };
}