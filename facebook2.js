var database = [
    {
        username: "israq",
        password: "israq127"
    }
];
var newsFeed = [
    {
        username: "Bobby",
        timeline: "Bobby doesn't feel like"
    },
    {
        username: "Israq",
        timeline: "Israq doesn't feel like"
    }
];

var userNamePrompt = prompt("Username Please");
var passwordPrompt = prompt("Password Please");

function logIn(user ,pass) {
    if (user === database[0].username &&
        pass === database[0].password) {
        console.log(newsFeed);
    } else {
        alert("Sorry login info doesn't match");
    }
        
}
logIn(userNamePrompt, passwordPrompt);