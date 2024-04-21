// Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// EQUALITY
// Test # 1
var myName = "Tayyaba";
console.log("Is myName == Tayyaba? I predict true.");
console.log(myName == "Tayyaba");
// Test # 2
console.log("Is myName ==  Neha? I predict false.");
console.log(myName == "Neha");
// INEQUALITY
// Test # 1
var car = "Toyota";
console.log("Is car == Toyota? I predict true");
console.log(car == "Toyota");
// Test # 2
console.log("Is car !== Toyota? I predict false");
console.log(car !== "Toyota");
// • Tests using the lower case function
var name1 = "Ayat";
var name2 = "ayat";
// Test # 1
console.log("Is name1 == name1.tolowercase()? I predict False.");
console.log(name1 == name1.toLowerCase());
// Test # 2
console.log("Is name2.tolowercase()==name2?I predict True.");
console.log(name2.toLowerCase() == name2);
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num1 = 20;
var num2 = 23;
// Test # 1 - EQUALITY
console.log("Is 20 == 23? I predict false.");
console.log(num1 == num2);
// Test # 2 - INEQUALITY
console.log("Is 20 !== 23? I predict true.");
console.log(num1 !== num2);
// Test # 3 - GREATOR THAN
console.log("Is 20 > 23? I predict false.");
console.log(num1 > num2);
// Test # 4 - LESS THAN
console.log("Is 20 < 23? I predict true.");
console.log(num1 < num2);
// Test # 5 - GREATOR THAN OR EQUAL TO
console.log("Is 20 >= 23? I predict False.");
console.log(num1 >= num2);
// Test # 6 - LESS THAN OR EQUAL TO
console.log("Is 20 <= 23? I predict True.");
console.log(num1 <= num2);
// • Tests using "and" and "or" operators
var age = 20;
// AND &&
console.log("Is age>15 && age<35? I predict True.");
console.log((age > 15) && (age < 35));
// OR || 
console.log("Is age==25 || age<10? I predict False.");
console.log((age == 25) || (age < 10));
// • Test whether an item is in a array
var array = [1, 2, 3, 4, 5];
// Test # 1
console.log("Is 3 in array? I predict True.");
console.log(3 in array);
// Test # 2
console.log("Is 8 in array? I predict False.");
console.log(8 in array);
// • Test whether an item is not in a array
var countries = ["Pakistan", "Japan", "Iceland", "China"];
// Test # 1
console.log("Is India not in countries? I predict True.");
console.log(!countries.includes("India"));
