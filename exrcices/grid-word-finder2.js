function gridWordFinder2(grid, word) {
    if (word === ""){
        return []
    }
    let result = [];
    // horisontal
    for (let i = 0; i < grid.length; i++){
        let row = grid[i].join('');
        let index = row.indexOf(word)
        if (index !== -1){
            result.push({x:index, y:i, direction: "horizontal"})
        }
    }
    //vertical
    for (let i = 0; i < grid[0].length; i++){
        let col = ""
        for (let j = 0; j < grid.length; j++){
            col += grid[j][i];
        }
        console.log(col)
        let index = col.indexOf(word)
        if (index !== -1){
            result.push({x:i, y:index, direction: "vertical"})
        }
    }
    return result
}
// const grid = [
//   ["c", "d", "r"],
//   ["a", "o", "a"],
//   ["t", "g", "t"],
//   ["c", "d",  "r"],
//   ["a", "o", "a"],
//   ["t", "g", "t"]
// ];

// console.log(gridWordFinder2(grid, "dog"));
