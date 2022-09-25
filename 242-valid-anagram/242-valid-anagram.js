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

  for (let i = 0; i < str1.length; i++) {
    dict1[i] ? dict1[i]++ : (dict1[i] = 1);
    dict2[i] ? dict2[i]++ : (dict2[i] = 1);
  }

  for (let key in dict1) {
    if (dict1[key] !== dict2[key]) valid = false;
  }
  return valid;
};
