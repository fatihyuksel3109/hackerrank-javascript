/*
String Manipulation: Reverse Words
Write a function that takes a sentence as input and reverses the order of words in it. For example, if the input is "Hello World", the output should be "World Hello".
*/

function reverseWords(sentence) {
  let reverseSentence = sentence.split(" ").reverse().join(" ");

  return reverseSentence;
}

const sentence1 = "Hello World";

console.log(reverseWords(sentence1));
