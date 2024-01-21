/**
 * https://leetcode.com/problems/rotting-oranges/description/
 * @param {*} A 
 * @returns 
 */
function solve3(A) {
    const ROWS = A.length;
    const COLS = A[0].length;
    let queue = [];
    let dir = [[0,1], [0,-1], [1,0], [-1,0]];
    let count1 = 0;
    for(let i = 0; i < ROWS; i++) {
        for(let j = 0; j < COLS; j++) {
            if(A[i][j] === 2) queue.push([i,j]);
            if(A[i][j] === 1) count1++;
        }
    }
    if(count1 === 0) return 0;
    if(queue.length === 0) return -1;
    let time = 0;
    let canRot;
    while(queue.length > 0) {
        let copy = queue.slice();
        canRot = false;
        queue = [];
        copy.forEach(c => {
            let orange = c;
            for(let i = 0; i < dir.length; i++) {
                let dx = orange[0] + dir[i][0];
                let dy = orange[1] + dir[i][1];
                if(dx >= 0 && dy >= 0 && dx < ROWS && dy < COLS && A[dx][dy] === 1) {
                    A[dx][dy] += 1;
                    queue.push([dx, dy]);
                    canRot = true;
                    count1--;
                }
            }
        })
        if(canRot) time++;
    }
    if(count1 > 0) return -1
    return time;
}

// console.log(solve([[2,1,0,2]]));
// console.log(solve([
//      [2,1,1],
//      [0,1,1],
//      [1,0,1]
// ]))