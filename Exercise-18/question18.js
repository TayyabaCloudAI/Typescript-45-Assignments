/* Q18: Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.*/
var locations = ["Iceland", "Austrailia", "Turkey", "Skardu", "Kashmir"];
// • Print your array in its original order.
console.log(locations);
// • Print your array in alphabetical order without modifying the actual list.
var alphabetical_array = locations.sort();
console.log(alphabetical_array);
// • Show that your array is still in its original order by printing it.
console.log(locations);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log(locations.sort().reverse());
// • Show that your array is still in its original order by printing it again.
console.log(locations);
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log(locations.reverse());
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(locations.reverse());
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
var sortedarray2 = locations.sort();
console.log(sortedarray2);
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
sortedarray2.reverse();
console.log(sortedarray2);
