"use strict";
//Q44: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function sandwich(...items) {
    console.log("\n Making a sandwich with the following items \n");
    items.forEach(item => console.log(item));
}
sandwich("Bacon", "Lettuce", "Tomato");
sandwich("Cheese", "Chicken", "Ketchup");
sandwich("Egg", "Lettuce", "Chicken", "Mayonese");
