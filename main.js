// Function to generate a random 8-digit number

    const code = Math.floor(10000000 + Math.random() * 90000000);
    document.getElementById("code").innerHTML = code;
