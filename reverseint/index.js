// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n){
//     if(n === 0){
//         return n;
//     }else {
//         const arr = n.toString().split('').reverse().join('');
//         return (Math.sign(arr) === 1) ? Number(arr) : Number(`-${arr.slice(0, -1)}`);
//     }
// }


function reverseInt(n){
    const reverse = n.toString().split('').reverse().join('');
    return parseInt(reverse) * Math.sign(n); 
}



module.exports = reverseInt;
