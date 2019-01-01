// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
   const charMap = {};
    let max = 0;
    let maxChar = '';

   for(let i of str){
       (charMap[i]) ? charMap[i]++ : charMap[i] = 1; 
   }

   for(let j in charMap){
       if(charMap[j] > max){
           max = charMap[j];
           maxChar = j;
       }
   }
   return maxChar;
}

module.exports = maxChar;
