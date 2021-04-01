function isPalindrome(str) {
  // console.log("str", str);
  let splitString = str.split(""); //Splittar stringen till en array
  // console.log("splitString", splitString);
  let reverseArray = splitString.reverse(); //vänder arrayen baklänges
  // console.log("reverseArray", reverseArray);
  let joinArray = reverseArray.join(""); //joinar arrayen till en string igen
  // console.log("joinArray", joinArray);

  //kollar om originalstringen och den nya omvända stringen är likadan
  if (str == joinArray) {
    // console.log("true");
    return true;
  } else {
    // console.log("false");
    return false;
  }
}

// isPalindrome("bobby");
module.exports = isPalindrome;