var myFav = {
    "color": "Red",
    "eat": {
        "Italian": "Pasta",
        "Thai": "Krapow",
        "Indian": "Rotee",
    },
    "music": "Hip-Hop",
    "tails": 2,
    "friends": []
}

myFav.number = 4 
delete myFav.tails

function myObj() {
    var colorVal = myFav.name
    var foodVal = myFav.food
    var musicVal = myFav['music']
}
function favEat(x) {
    switch(x){
        case "Indian": console.log("My favorite eat is " + myFav.eat.Indian)
        break
        case "Italian": console.log("My favorite eat is " + myFav.eat.Italian)
        break
        case "Thai": console.log("My favorite eat is " + myFav.eat.Thai)
        break
    }
    return "favEat function ended"
}
function addFriend(x) {
    myFav.friends.push(x)
    return myFav.friends
}

/*function checkObj(checkProp) {
    if (myFav.hasOwnPorperty(checkProp)) {
        return myFav[checkProp]
    } else {
        return "Not Found"
    }
}*/
//error

console.log(favEat("Thai"))
console.log(addFriend("Got"))