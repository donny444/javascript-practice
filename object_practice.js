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

/*function checkObj(checkProp) {
    if (myFav.hasOwnPorperty(checkProp)) {
        return myFav[checkProp]
    } else {
        return "Not Found"
    }
}*/
//error

console.log(checkObj("music"))