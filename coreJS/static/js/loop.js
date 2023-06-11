// //for loop 
// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let i = 0;
// let len = cars.length;
// let text = "";

// for (; i < len; i++) {
//   text += cars[i] + "<br>";
// }

// document.getElementById("demo").innerHTML = text;


// //For In Loop
// let person = {fname:"John", lname:"Doe", age:25}; 

// let txt = "";
// for (let x in person) {
//   txt += person[x] + " ";
// }

// document.getElementById("demo").innerHTML = txt;

// //for each
// let numbers = [45, 4, 9, 16, 25];

// let txt = "";
// numbers.forEach(e);
// document.getElementById("demo").innerHTML = txt;

// function e(value, index, array) {
//   txt += value + "<br>"; 
// }


// //while loop
// let text = "";
// let i = 0;
// while (i < 10) {
//   text += "<br>" + i;
//   i++;
// }
// document.getElementById("demo").innerHTML = text;

//Do While Loop

let text = ""
let i = 0;

do {
  text += "<br>"+i;
  i++;
}
while (i < 10);  

document.getElementById("demo").innerHTML = text;
