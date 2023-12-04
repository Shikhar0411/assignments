/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

    // First check for the lenghts
    if (str1.length !== str2.length) {
        return false;
    }

    // Add characters of one to a map, and the number of times it appears
    let characterMap = new Map();

    for (let i = 0; i < str1.length ; i++){
        let key = str1[i];
        if (characterMap.has(key)) {
            characterMap.set(key,characterMap.get(key) + 1);
        } else {
            characterMap.set(str1[i],1);
        }
    }

    for (let i = 0; i < str2.length ; i++){
        let key = str2[i];
        if (!characterMap.has(key)) return false;

        if (characterMap.get(key) === 0) return false;

        characterMap.set(key,characterMap.get(key)-1);
    }

    return true;
}

module.exports = isAnagram;
