

function solve(A, B) {
    var obj = {};
    for(var i = 0; i < B.length; i++) {
        obj[i] = [A[i], B[i]];
    }
    var keys  = Object.keys(obj);
    keys.sort((a,b)=>{
        return obj[b][1] - obj[a][1];
    });
    var deadlineArr = [];
    var result = 0;
    for(var i = 0; i < keys.length; i++) {
        var day = obj[keys[i]][0];
        if(deadlineArr[day]==null) {
            deadlineArr[day] = "filled";
            result += obj[keys[i]][1];
        } else {
            while(deadlineArr[day]) {
                day--;
            }
            if(day > 0) {
                deadlineArr[day] = "filled";
                result += obj[keys[i]][1];   
            }
        }
    }
    return result;
}


console.log(solve(
[ 8, 4, 3, 1, 2, 2 ], [ 5, 8, 6, 6, 6, 5 ]
));