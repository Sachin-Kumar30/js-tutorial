const score = 400;
// console.log(score);

const balance = new Number(400);
// console.log(balance); // explicitly tells DataType(Number: 400)

// console.log(balance.toString().length); // 400 => but of String
// console.log(typeof balance); // converted into String
// console.log(balance.toFixed(2)); // gives point after no.=>written in the ()

const otherNumber = 33.4556;
// console.log(otherNumber.toPrecision(4)); // give precison upto places given in (). 

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));

// Number.MAX_VALUE // maximmum value for number
// Number.MIN_VALUE // min value of Number

// ******************** MATHS ******************

// console.log(Math); // inbuilt objrct+=>start with Capital
// console.log(Math.abs(-4)); // abs(absolute) => exact value also known as modulus(gives val only not sign)
// console.log(Math.round(4.86)); // Round off's the val=> removes decimal

console.log(Math.random());// val always be in b/w =>0-1

console.log(Math.floor(Math.random()*10) + 1 );  // when requires range of no.s => *10 got no. , +1 when there is 0 after decimal(atleast got 1)

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()) * (max - min + 1) + min);















