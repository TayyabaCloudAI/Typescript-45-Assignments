//Q41: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


function show_magicians(magician: string[]){
       for(let i:number = 0; i<magicians.length; i++){
        console.log(`${magicians[i]}`);
       }
}
let magicians: string[]= ["Harry Potter", "Hermione Granger", "Ron Weasly", "Luna Lovegood"];

show_magicians(magicians);
