// Q31: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var usernames = ["Admin", "Ayya", "Muhammad Anas", "Zayyan", "Ahmad Khan"];
usernames = [];
if (usernames.length == 0) {
    console.log("Your array is empty. We need to find some users!");
}
else {
    for (var i = 0; i < usernames.length; i++) {
        if (usernames[i] == "Admin") {
            console.log("Hello Admin, would you like to see a status report?");
        }
        else
            (console.log("Hello ".concat(usernames[i], ", thank you for logging in again.")));
    }
}
