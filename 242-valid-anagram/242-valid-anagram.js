/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("")
    ? true
    : false;
};

const validAnagram = (str1, str2) => {
  const dict1 = {};
  const dict2 = {};
  let valid = true;
  if (str1.length !== str2.length) return false;
  str1
    .split("")
    .forEach((letter) =>
      dict1[letter] ? dict1[letter]++ : (dict1[letter] = 1)
    );
  str2
    .split("")
    .forEach((letter) =>
      dict2[letter] ? dict2[letter]++ : (dict2[letter] = 1)
    );

  for (let key in dict1) {
    if (dict1[key] !== dict2[key]) valid = false;
  }
  return valid;
};

console.log(validAnagram("a", "ab"));
