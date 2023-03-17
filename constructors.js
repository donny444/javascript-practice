function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function () {
        console.log(`Hi! I'm ${this.name}.`);
    };
    return obj;
}

function Person(name) {
    this.name = name;
    this.introduceSelf = function () {
      console.log(`Hi! I'm ${this.name}.`);
    };
}  

const salva = createPerson("Salva");
salva.name;
salva.introduceSelf();

const frankie = createPerson("Frankie");
frankie.name;
frankie.introduceSelf();

const jcole = new Person("J. Cole")

const joeclay = new Person("Joe Clay")

//console.log()