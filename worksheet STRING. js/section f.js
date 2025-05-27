//convert a sentence "I love coding " into the array of word .
let sentence="I love coding";
let words =sentence.split("")
console.log(words);

//convert  the string "alpha" into an arrey of character.
let sentence2="alpha";
let words2= sentence2.split("");
console.log(words2);

//print the ASCII value of the character "A".
let char ="A";
let ascii=char.charCodeAt(0);
console.log(ascii);

//join the arrey["web", "dev"] into the single string using with a space in between .
let arr=["web","dev"];
let result=arr.join("");
console.log(result);

//given a string: "Javascript is Awesome", convert it to:
//1. All lowercase
//2. All uppercase
//3. replace"Awesome" with "powerful"
//4. check if the string start with the "java"

 let str= "Javascript is Awesomes";
let result2=str.toLowerCase("");
console.log(result2);

let str8= "Javascript is Awesome";
let result4= str8.toUpperCase("");
console.log(result4);

let str7= "Jawascript is Awesome";
let result5=str7.replace("Awesome","powerful");
console.log(result5)

let str10="Javascript is Awesome";
let result6=str10.indexOf("Java");
console.log(result6);