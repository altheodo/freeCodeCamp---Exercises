const userInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const output = document.getElementById("output");
const romans = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1]
];

const romanize = (input) => {
  let out = "";
  let ind = 0;
  let number = input;
  while (number > 0 && ind < romans.length) {
    if (number === 1) {
      out += "I";
      return out;
    } else {
      if (number % romans[ind][1] === number) {
        ind++;
      } else {
        for (let i = 0; i < Math.floor(number / romans[ind][1]); i++) {
          out += romans[ind][0];
        }
        number = number % romans[ind][1];
        ind++;
      }
    }
  }
  return out;
}

const checkUserInput = () => {
  if (userInput.value === "") {
    output.innerText = "Please enter a valid number";
    result.classList.add("alert");
    result.classList.remove("hide");
    return;
  }

  const inputNumber = parseInt(userInput.value);
  
  if (inputNumber < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
    result.classList.add("alert");
    result.classList.remove("hide");
    return;
  } else if (inputNumber > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
    result.classList.add("alert");
    result.classList.remove("hide");
    return;
  }

  output.innerText = romanize(inputNumber);
  result.classList.remove("alert", "hide");
  userInput.value = "";
}

convertBtn.addEventListener("click", checkUserInput);

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});