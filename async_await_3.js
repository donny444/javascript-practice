async function fetch() {
    try {
        const response = await fetch("https://raw.githubusercontent.com/donny444/JSON/main/thailand_public_train_data.json");
        if(!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Could not get products: ${error}`);
    }
}

const promise = fetch();
promise.then((data) => console.log(data.name));