    function gridWordsFinder(grid, words) {
        let strs = [];
        let res = ""
        if (grid.length === 0){
            return [];
        }
        for (let i = 0; i < grid.length; i++){
            strs.push(grid[i].join(''))
        }
        let col = "";
        for (let i = 0; i < grid[0].length; i++){
            for (let j = 0; j < grid.length; j++){
                col += grid[j][i]
            }
            strs.push(col)
            col = ""
        }
        let found = [];
        for (let i = 0; i < words.length; i++){
        for (let j = 0; j < strs.length; j++){
                if (strs[j].includes(words[i])){
                    found.push(words[i])
                }
        } 
        }
        return [...new Set(found)]
    }
    // const grid = [
    // ["c", "a", "t"],
    // ["a", "a", "t"],
    // ["r", "a", "t"],
    // ["d", "o", "g"],
    // ];

    // console.log(
    // gridWordsFinder(grid, ["cat", "dog", "rat", "tar", "car", "rac", "g"]),
    // );
    // console.log(gridWordsFinder(grid, []));
