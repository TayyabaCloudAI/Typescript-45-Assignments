// Q3: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let person2Name: string = "Hira";

console.log(person2Name.toLowerCase());
console.log(person2Name.toUpperCase());
console.log(person2Name.charAt(0).toUpperCase() + person2Name.slice(1).toLowerCase());