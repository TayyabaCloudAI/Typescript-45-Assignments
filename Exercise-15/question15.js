"use strict";
// Q15: 
// You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let guest = ["Anushi", "Ayesha", "Aniba"];
let invite = (",I invite you to have dinner at my house tommorow night.");
// console.log("Hi", guest[0]+invite);
// console.log("Hi", guest[1]+invite);
// console.log("Hi", guest[2]+invite);
console.log(guest[1], "can't make it to the dinner.");
guest[1] = "Seher";
console.log("Hi", guest[0] + invite);
console.log("Hi", guest[1] + invite);
console.log("Hi", guest[2] + invite);
