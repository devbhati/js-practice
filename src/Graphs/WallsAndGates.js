/**
 * https://leetcode.com/problems/walls-and-gates/description/
*/
function wallsAndGates(rooms) {
    const ROWS = rooms.length;
    const COLS = rooms[0].length;
    const visit = new Set();
    const q = [];

    function addRoom(i, j) {
        if(i < 0 || j < 0 || i >= ROWS || j >= COLS || rooms[i][j] === -1 || visit.has(i+'-'+j)) return;
        visit.add(i+'-'+j);
        q.push([i, j]);
    }

    for(let i = 0; i < ROWS; i++) {
        for(let j = 0; j < COLS; j++) {
            if(rooms[i][j] === 0) {
                q.push([i, j]);   
                visit.add(i+'-'+j);
            }
        }
    }
    let dist = 0;
    while(q.length > 0) {
        const copy = q.slice()
        for(let k = 0; k < copy.length; k++) {
            let [r, c] = q.shift();
            rooms[r][c] = dist;
            addRoom(r+1, c);
            addRoom(r-1, c);
            addRoom(r, c+1);
            addRoom(r, c-1);
        }
        dist += 1;
    }

    return rooms;
}

// console.log(wallsAndGates([
//     [2147483647,-1,0,2147483647],
//     [2147483647,2147483647,2147483647,-1],
//     [2147483647,-1,2147483647,-1],
//     [0,-1,2147483647,2147483647]
// ]))