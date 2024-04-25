//Q42: Start with a copy of your program from Exercise 41.  Call show_magicians() to see that the list has actually been modified.

function show_magicians(magician: string[]){
       for(let i=0; i<magician.length; i++){
        console.log(magician[i])
       }
}
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
function make_great(magician: string[]){
    return magician.map(names=> `The Great ${names}`)
}

let magicians: string[]= ["Harry Potter", "Hermione Granger", "Ron Weasly", "Luna Lovegood"];


// Call show_magicians() to see that the list has actually been modified.
show_magicians(make_great(magicians));

