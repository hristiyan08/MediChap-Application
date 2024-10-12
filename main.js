const name =  document.getElementById("name").value;
const email = document.getElementById("email").value;
export {name};
export {email};

function generateRandom8DigitNumber() {
    // Генерира произволно число от 10000000 до 99999999
    return Math.floor(10000000 + Math.random() * 90000000);
}

// Пример за използване на функцията
const randomNum = generateRandom8DigitNumber();
export {randomNum};