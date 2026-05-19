function nestedArrayReverser(words){
    let res=[];
    let result =[];
    for (let i = 0; i < words.length; i++){
        res.push(...words[i])
    }
    return res.reverse().join(" ")
}
// console.log(
//   nestedArrayReverser([
//     ["hello", "world"],
//     ["this", "is"],
//     ["a", "test"],
//   ]),
// );
// console.log(nestedArrayReverser([[]]));