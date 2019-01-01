// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);

//   if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
//       return false;
//   }

//   for(let i in aCharMap){
//       if(aCharMap[i] !== bCharMap[i]){
//           return false;
//       }
//   }
//   return true;
// }

// function buildCharMap(str) {
//   const charMap = {};
  
//   for(let i of str.replace(/[^\w]/g, "").toLowerCase()){
//     (charMap[i]) ? charMap[i]++ : charMap[i] = 1;
//   }
//   return charMap;
// }

function anagrams(stringA, stringB) {
  return cleanAndSort(stringA) === cleanAndSort(stringB);
}

function cleanAndSort(str){
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;