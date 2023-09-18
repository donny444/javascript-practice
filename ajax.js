const httpRequest = new XMLHttpRequest();

function handler() {
    // Process the server response here.
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        // Everything is good, the response was received.
    } else {
        // Not ready yet.
    }
    if (httpRequest.status === 200) {
        // Perfect!
    } else {
        // There was a provlen with the request
        // For example, the response may have a 404 (Not Found)
        // or 500 (Internal Server Error) reponse code
    }
}

httpRequest.onreadystatechange = handler;

httpRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded"
);

httpRequest.open("GET", "http://www.example.org/some.file", true);
httpRequest.send();