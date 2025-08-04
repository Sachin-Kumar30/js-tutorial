const name = "lovejs";
const repocount = 30;

// console.log(name + repocount + "value"); // don't use this syntax now(not modern)

// console.log(`Hello my name is ${name} ans my repo count is ${repocount}`); // modern syntax ` ${variable name} `=> String Interpolation

const gameName = new String("cheetah-is-in-the-house") // Another way=> Declare String => invokes object

console.log(gameName.length);

const newString = gameName.substring(0,4);  // will not count end (char just before end), ignores -ve value
console.log(newString);

const anotherString = gameName.slice(-8, 2);  // -ve gives char from reverse direction (substring)
console.log(anotherString);

const newStringOne = " sherrr ";
console.log(newStringOne);
console.log(newStringOne.trim()); // trim()=> removes extra space

const url = "https://sachin.com/kadi%30pakoda"
console.log(url.replace('%30', '-'));  // replaces the string (specific part)

console.log(url.includes('sachin')); // if keyword is in the string or not

console.log(gameName.split('-')); // split on basis of'-'=> gives array



