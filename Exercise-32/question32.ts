// Q32: Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

let current_user:string[] = ["Tayyaba", "Anas", "Areeba", "Anushia"]

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

let new_user:string[] = ["Hamza", "Okasha", "Zia", "Tayyaba", "Anas"]

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_user_lowercase = current_user.map(user=>user.toLowerCase())
let new_user_lowercase = new_user.map(user=>user.toLowerCase())

for (let i:number = 0; i<new_user_lowercase.length; i++)
    {
        if (current_user_lowercase.includes(new_user_lowercase[i]))
            {
                console.log(`${new_user[i]} username is taken. Please choose a new one.`);
            }
        else (console.log(`${new_user[i]} username is available.`));
    }

