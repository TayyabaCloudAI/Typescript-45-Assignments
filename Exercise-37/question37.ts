//Q37: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size: string = "Large", message: string = "I love TypeScript"){
         console.log(`You selected a tshirt of size ${size} and message ${message} printed on it.`)
}
// Printing a shirt with large size
make_shirt();
// Printing a shirt with medium size
make_shirt("Medium");
// Printing a shirt with any size and a different message
make_shirt("Small", "Ayyas Journal");

