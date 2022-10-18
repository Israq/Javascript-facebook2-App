var database = [
    {
        username: "israq",
        password: "israq127"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "ingrid",
        password: "777"
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
function isUserValid(user, pass) {
    for(var i = 0; i < database.length; i++){
        if(database[i].username === user && 
            database[i].password === pass) {
                return true;
            } 
        }
    return false;
}
function logIn(user ,pass) {
    if (isUserValid(user, pass)) {
        console.log(newsFeed);
    } else {
        alert("sorry wrong pass / user");
    }
    }
    
    //if (user === database[0].username &&
    //    pass === database[0].password) {
    //    console.log(newsFeed);
    //} else {
    //   alert("Sorry login info doesn't match");
    //}
        

logIn(userNamePrompt, passwordPrompt);