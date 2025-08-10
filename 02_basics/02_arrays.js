 const marvel_heros = ["thor", "ironman", "spiderman"]
 const dc_heros = ["superman", "flash", "batman"]

//  marvel_heros.push(dc_heros); // arrays can srtore any "DataType"

//  console.log(marvel_heros);
//  console.log(marvel_heros[3]);

const allHeros = marvel_heros.concat(dc_heros); //  => gives new aarray  and adds the elements of both arr
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(3); // to merge all subarr into one array
// console.log(real_another_array);


console.log(Array.isArray("Sachin"));
console.log(Array.from("Sachin")); // converts averything into an array
console.log(Array.from({name: "Sachin"})); // => define first want convert key or value what you want to convert => otherwise [] always


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));




 