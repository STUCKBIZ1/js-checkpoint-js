let obj1 = { a: 1, b: 2, k : {c : 4} };
let obj2 = { a: 1, b: 2, k : {c : 3} };

console.log(JSON.stringify(obj1) === JSON.stringify(obj2));