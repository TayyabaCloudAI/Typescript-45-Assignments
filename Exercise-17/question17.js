/* You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.*/
var guest = ["Anushi", "Ayesha", "Aniba"];
guest[1] = "Seher";
guest.unshift("Anas");
var middleperson = "Maaz";
var middle = guest.length / 2;
guest.splice(middle, 0, middleperson);
guest.push("Rehan");
var message = "Hello everyone. Sorry for the inconvinience but we found out that we can only invite two people  now.";
console.log(message);
// Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
var appology = "we appologize for not being able to invite you to dinner this time.";
guest.pop();
console.log("Rehan, ".concat(appology));
guest.pop();
console.log("Aniba, ".concat(appology));
guest.pop();
console.log("Seher, ".concat(appology));
guest.pop();
console.log("Maaz, ".concat(appology));
// Print a message to each of the two people still on your list, letting them know they’re still invited.
var invitation = "you are still invited to the dinner, please come.";
for (var i = 0; i < guest.length; i++) {
    console.log("".concat(guest[i], ", ").concat(invitation));
}
;
// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
guest.pop();
guest.pop();
console.log(guest);
