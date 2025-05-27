//replace the word "intern" with the "mentor" in "alphaintern"
let str ="alphaintern";
let result =str.replace("alpha","mentor");
console.log(result);

//replace all occurence of "a" with "z" in "banana"
let str2 ="banana";
let result2 =str2.replace("a","z");
console.log(result2);

//remove all the area extr space from the string "javascript is awesome"and print the result.
let str3 ="javascript is awesome";
let clear= str.trim().replace(/s+/g,"");
console.log(clear)

//Extrct 'intern"from the string "Alphaintern".
let str4="Alphaintern";
let slice=str4.slice(5);
console.log(slice);

//Extrct the "Alpha" from the string "Alphaintern"
let str5="Alphaintern";
let slice2= str5.slice(5);
console.log(slice2);