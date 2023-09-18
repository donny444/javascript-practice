const fetchPromise = fetch("../JSON/superheroes.json");

console.log(fetchPromise);

fetchPromise.then((response) => {
    console.log(`Recieved response: ${response.status}`);
});

console.log("Started request...");