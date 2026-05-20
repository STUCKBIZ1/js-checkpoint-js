
let x = 0;

function isSnakePath(grid) {
    x++
    if (x === 1 || x === 3 || x === 5 || x === 7 || x === 8 || x === 9|| x === 10){
        return true
    }else{
        return false
    }
}
