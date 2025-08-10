 // Dates
 
 let myDate = new Date();
//  console.log(myDate.toString());
//  console.log(myDate.toDateString());
//  console.log(myDate.toLocaleString());
//  console.log(myDate.toTimeString());
 

//  let myreatedDate = new Date(2025, 2, 30);
//  let myreatedDate = new Date(2025, 2, 30, 14,5);
 let myCreatedDate = new Date("03=31-2003"); // in " " months is ot 0 based indexed => not an array
//  console.log(myCreatedDate.toDateString()); // months are 0 based indexed in jS
//  console.log(myCreatedDate.toLocaleString()); 

 let myTimeStamp = Date.now(); // give date on now
//  console.log(myTimeStamp); // gives value in millisecons (ms)
//  console.log( myCreatedDate.getTime());
//  console.log(Math.floor(Date.now()/1000)); //gives val in => in second ;

 let newDate = new Date();
 console.log(newDate); // gives todats date
 console.log(newDate.getMonth() + 1); // gives months with 0 based indexing(month no)
 console.log(newDate.getDay()); // day no (friday = 5)

 newDate.toLocaleString('dafault', {
    weekday: "long",
    
 })
  
 
 
 

 
 
 

 
 