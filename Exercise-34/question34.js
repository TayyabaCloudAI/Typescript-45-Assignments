// Q34: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
var favorite_pizza = ["Chicken Cheese Pizza", "Malai Boti Pizza", "Pepperoni Pizza"];
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
for (var i = 0; i < favorite_pizza.length; i++) {
    console.log("I like ".concat(favorite_pizza[i], "."));
}
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
console.log("I really like pizza.");
