"use strict";
//Q6: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let myName = "\n\tTayyaba\t\n";
console.log(myName);
let withoutwhitespace = myName.trim();
console.log(withoutwhitespace);
