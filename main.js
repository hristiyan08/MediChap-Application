// Function to generate a random 8-digit number
function generateRandom8DigitNumber() {
    return Math.floor(10000000 + Math.random() * 90000000);
}

// Function to get values and generate random number
export function getUserData() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const randomNum = generateRandom8DigitNumber();

    return { name, email, randomNum }; // Return an object with all data
}
