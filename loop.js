fruits = ["Apple", "Banana", "Coconut", "Durian", "Eggplant", "Grape"];
alphabet = "ABCDEG";

var keyboard = {
    brand: "Raser",
    serie: "Bigon",
    size: "100",
    color: "Yellow"
};

//For Loop
for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit name that start with " + alphabet[i] + " is " + fruits[i] + "\n");
}

//For In Loop
for (let i in keyboard) {
    let text = "";
    text += keyboard[i];
    console.log(text);
}