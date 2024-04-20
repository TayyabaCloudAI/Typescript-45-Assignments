// Q16: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. 
var guest = ["Anushi", "Ayesha", "Aniba"];
var invite = (",I invite you to have dinner at my house tommorow night.");
// console.log(guest[1], "can't make it to the dinner.");
guest[1] = "Seher";
// Add a print statement to the end of your program informing people that you found a bigger dinner table.
console.log("Hello everyone! We have found a bigger dinner table.");
// • Add one new guest to the beginning of your array.
guest.unshift("Anas");
// • Add one new guest to the middle of your array.
var middleperson = "Maaz";
var middle = guest.length / 2;
guest.splice(middle, 0, middleperson);
// • Use append() to add one new guest to the end of your list. 
guest.push("Rehan");
// • Print a new set of invitation messages, one for each person in your list.
var message = ",I invite you to have dinner at my house tonight, please come.";
for (var i = 0; i < guest.length; i++) {
    console.log("Hello ".concat(guest[i], " ").concat(message));
}
