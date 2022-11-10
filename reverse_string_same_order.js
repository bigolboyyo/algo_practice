/*
 Write me a function that will take in a string and return another string
    with all the letters in each word reversed (but the words in the original order still).
    e.g. "Hello world" -> "olleH dlrow"
*/

let test = "Reverse Each Word In This String";

function reverseStringInOrder(s) {
  let res = [];
  let splitted = s.split(" ");
  splitted.map((word) => {
    let reverse = word.split("").reverse().join("");
    res.push(reverse);
  });
  let ans = res.toString().replaceAll(",", " ");
  console.log(ans);
  return ans;
}

reverseStringInOrder(test);
