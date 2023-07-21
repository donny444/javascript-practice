//Objects in an array
const reviews_1 = [
    {
        "User": "Poo Srang",
        "Thing": "The Mandalorian",
        "Stars": 2,
        "Description": "Bored"
    },
    {
        "User": "Phai Sang Kom",
        "Thing": "Secret Invasion",
        "Stars": 4,
        "Description": "Not bad"
    },
    {
        "User": "Joe Clay",
        "Thing": "FAST X",
        "Stars": 1,
        "Description": "Terrible"
    },
    {
        "User": "Kaya Sang Kom",
        "Thing": "Andor",
        "Stars": 5,
        "Description": "Very Good"
    }
];

//Object property by user valued as array
const review_2 = {
    "Poo Srang": [{
        "Thing": "The Mandalorian",
        "Stars": 2,
        "Description": "Bored"
    }],
    "Phai Sang Kom": [{
        "Thing": "Secret Invasion",
        "Stars": 4,
        "Description": "Not Bad"
    }],
    "Joe Clay": [{
        "Thing": "FAST X",
        "Stars": 1,
        "Description": "Terrible"
    }],
    "Kaya Sang Kom": [{
        "Thing": "Andor",
        "Stars": 5,
        "Description": "Very Good"
    }]
}