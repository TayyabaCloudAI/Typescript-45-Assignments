//Q37: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("You selected a tshirt of size ".concat(size, " and message ").concat(message, " printed on it."));
}
// Printing a shirt with large size
make_shirt();
// Printing a shirt with medium size
make_shirt("Medium");
// Printing a shirt with any size and a different message
make_shirt("Small", "Ayyas Journal");
