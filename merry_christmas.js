const isChristmas = new Date();

if(isChristmas.getDate() == 25 && isChristmas.getMonth() == 11) {
    for(i = 0; i < 3; i++) {
        console.log("Merry Christmas! HoHoHo!");
    }
} else {
    console.log("Today is not Christmas day");
}