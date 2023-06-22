class Dvd {

    constructor(name, releaseYear, director) {
        this.name = name;
        this.releaseYear = releaseYear;
        this.director = director;
    }

    description() {
        console.log(`Dvd "${this.name}" released on ${this.releaseYear} directed by ${this.director}.`);
    }
}

DvdArray = [];

//Object inspiration: https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3294/
avengersDvd = new Dvd("The Avengers", 2012, "Joss Whedon");
incrediblesDvd = new Dvd("The Incredibles", 2004, "Brad Bird");
lionKingDvd = new Dvd("The Lion King", 2019, "Jon Favreau");

DvdArray[0] = avengersDvd;
DvdArray[1] = incrediblesDvd;
DvdArray[2] = lionKingDvd;

for(let i = 0; i < DvdArray.length; i++) {
    console.log(DvdArray[i]);
}

for(let j = 0; j < DvdArray.length; j++) {
    DvdArray[j].description();
}