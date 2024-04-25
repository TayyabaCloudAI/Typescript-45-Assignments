"use strict";
//Q43: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. 
// Program from exercise 42
function show_magicians(magician) {
    for (let i = 0; i < magician.length; i++) {
        console.log(magician[i]);
    }
}
function make_great(magician) {
    return magician.map(names => `The Great ${names}`);
}
let magicians = ["Harry Potter", "Hermione Granger", "Ron Weasly", "Luna Lovegood"];
// Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. 
let copy_magicians = magicians.slice();
let copy_great_magicians = make_great(copy_magicians);
// Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
show_magicians(magicians); // original
show_magicians(copy_great_magicians); //copy
