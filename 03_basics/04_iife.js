(function chai() { //   named IIFE(means there is a name of a function inside a IIFE function)
    console.log("DB Connected");
}) (); // always use ";" to end IIFe function



// (function chaiAurCode() {
//     console.log("DB Connected Two");
// }) ()


// (() => {
//     console.log("DB Connected Two");
// }) ();


((name) => {
    console.log(`DB Connected Two ${name}`);
}) ("kerala");