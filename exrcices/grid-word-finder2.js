function gridWordFinder2(grid, word) {
    let result = {}
    let ari = []
    let ver = []
    let res = ""
    for (let i = 0; i < grid.length; i++){
        ver.push(grid[i].join(""));
    }
    for (let i = 0; i < grid[0].length; i++){
        for(let j = 0; j < grid.length; j++){
            res += grid[j][i];
        }
        ori.push(res)
        res = ""
    }
    let ori1 = ver.join(" ");
    let ver1 = ori.join(" ");
    console.log(ori)
}
const grid = [
  ["c", "a", "t"],
  ["d", "o", "g"],
  ["r", "a", "t"],
];

console.log(gridWordFinder2(grid, "cat"));
