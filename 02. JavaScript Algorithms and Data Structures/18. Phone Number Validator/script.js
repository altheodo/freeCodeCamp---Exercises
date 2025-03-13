const userInput = document.getElementById("user-input");
const resultsDiv = document.getElementById("results-div");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const combRegex = /^(1\s?)?((\(\d{3}\)|\d{3})[\-\s]?)(\d{3}[\-\s]?\d{4})$/;

const validation = input => {
    if (input === "") {
        alert("Please provide a phone number");
        return;
    }

    const isValid = combRegex.test(input);
    const resultP = document.createElement("p");

    if (isValid) {
        resultP.textContent = `Valid US Number: ${input}`;
    } else {
        resultP.textContent = `Invalid US Number: ${input}`;
    }
    resultsDiv.appendChild(resultP);
};

checkButton.addEventListener("click", () => {
    validation(userInput.value);
    userInput.value = "";
});

userInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        validation(userInput.value);
        userInput.value = "";
    }
});

clearButton.addEventListener("click", () => {
    resultsDiv.textContent = "";
});