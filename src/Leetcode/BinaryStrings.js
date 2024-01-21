//110100101000
//4

function binaryStrings(A, B) {
    var arr = A.split("");
    var temp = new Array(A.length).fill(0);
    var xr = 0;
    var result = 0;
    var ele;

    for(var i = 0; i <= A.length-B; i++) {
        ele = A[i];
        if(temp[i] == 1) xr = (xr == 1) ? 0 : 1;
        if(xr == 1) ele = (ele == '0') ? '1' : '0';
        if(ele == '0') {
            xr = (xr == 1) ? 0 : 1;
            temp[i+B] = 1;
            result += 1;
        }
    }
    for(var i = A.length-B+1; i < A.length; i++) {
        ele = A[i];
        if(temp[i] == 1) xr = (xr == 1) ? 0 : 1;
        if(xr == 1) ele = (ele == '0') ? '1' : '0';
        if(ele == '0') {
            return -1;
        }
    }
    return result;
}



console.log(binaryStrings("010101", 3));