function isPrime(num) {
    // Check if number is less than 2, because 0 and 1 are not prime
    if (num < 2) {
        return false;
    }

    // Check if the number is 2 (the only even prime number)
    if (num === 2) {
        return true;
    }

    // Check if the number is even (and not 2), because even numbers can't be prime
    if (num % 2 === 0) {
        return false;
    }

    // Check for factors of the number up to its square root, only testing odd numbers
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        // If the number has a factor other than 1 and itself, it's not prime
        if (num % i === 0) {
            return false;
        }
    }

    // Otherwise, it's prime
    return true;
}

// Test the function with some example inputs
console.log(isPrime(17)); // Output: true
console.log(isPrime(4)); // Output: false
console.log(isPrime(0)); // Output: false

//by GPT-3.5