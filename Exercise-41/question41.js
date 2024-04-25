"use strict";
//Q41: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magician) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(`${magicians[i]}`);
    }
}
let magicians = ["Harry Potter", "Hermione Granger", "Ron Weasly", "Luna Lovegood"];
show_magicians(magicians);
