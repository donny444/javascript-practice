names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]
function whosPlaying() {
    return names[Math.floor(Math.random()*names.length)]
}
console.log(whosPlaying())