const userInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultText = document.getElementById("result");

function cleanInputString(str) {
  const regex = /[^a-zA-Z0-9]/g;
  return str.replace(regex, "").toLowerCase();
}

function reverseString(str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr;
}

function checkPalindrome(str1, str2) {
  if (str1 === str2 && str1 !== "" && str2 !== "") {
    return true;
  } else {
    return false;
  }
}

function printResult() {
  if (userInput.value === "") {
    alert("Please input a value");
  } else {
    const resultBool = checkPalindrome(cleanInputString(userInput.value), reverseString(cleanInputString(userInput.value)));

    if (resultBool) {
      resultText.innerText = `${userInput.value} is a palindrome`;
    } else {
      resultText.innerText = `${userInput.value} is not a palindrome`;
    }

    userInput.value = "";
  }
}

checkButton.addEventListener("click", printResult);