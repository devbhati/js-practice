// var pokemon = {
//     firstName: 'pika',
//     lastName: 'chu',
//     getName: function() {
//         return this.firstName + ' ' + this.lastName   
//     }
// }

// var bio = function(snack, hobby) {
//     console.log(this.getName() + ' loves ' + snack + ' and ' + hobby);
// }

// First argument is the object that 'this' reference will point to in the function
// Used to change to context
// bio.call(pokemon, 'sushi', 'algos');
// bio.apply(pokemon, ['sushi', 'algos']);
// var method = bio.bind(pokemon);
// method('chips', 'video games')

// // == == == == == == == == == == == ==
// var a = [5,9,1,14,2,11];
// console.log(Math.max.apply(null, a));

// // == == == == == == == == == == == ==
// var monica = {
//     name: 'Monica Geller',
//     total: 400,
//     deductFee: function(fee) {
//         this.total = this.total - fee;
//         return this.name + ' remaining balance ' + this.total;
//     }
// }

// var rachel = {name: 'Rachel green', total: 1500}
// var payFee = monica.deductFee.bind(rachel);
// console.log(payFee(350));
// console.log(monica.deductFee.apply(rachel, [300]));



// Implement function log(a, b) => sample text a b


// function log() {
//     var a = Array.prototype.slice.call(arguments);
//     a.unshift('sample text');
//     console.log.apply(this, a);
// }

// log('apple', 'ball', 'cat');



// CLOSURE - Retaining the scope of a variable even after a method has returned
// When the returned method was defined, it had variables which it remembered when it was called
// when called, there was a new scope formed called closure, which contained the variable. eg. karan arjun, karz.
// */
// function makeCounter() {
//     var count = 0;
//     return function() {
//         return count++;
//     }
// }

// var counter = makeCounter();


// for(var i = 0; i < 10; i++) {
//     setTimeout((function (i) {
//         console.log(i); 
//     })(i),10)
// }


var arr = [1,2,3,4];
arr = 5;
console.log(arr);