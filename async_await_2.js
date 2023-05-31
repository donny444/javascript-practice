async function fetchNayok() {
    try{
        const response = await fetch(
            "https://raw.githubusercontent.com/donny444/JSON/main/prime_ministers.json"
        );
        if(!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Could not get products: ${error}`);
    }
}

const promise = fetchNayok();
promise.then((data) => console.log(data[0].firstName));