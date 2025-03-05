const userInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const output = document.getElementById("output");
const romNum = [1000, 500, 100, 50, 10, 5, 1];
const romLet = ["M", "D", "C", "L", "X", "V", "I"];
let outputText = "";

const roman = (input, i) => { 
  //let i = 0;
  //let step = 0;
  if (input % romNum[i] === 0) {
    let times = 0;
    while (times <= i + 1) {
      outputText += romLet[i];
      times++;
    }
    return outputText;  
  } else {
    //i++;
    if (input === (input % romNum[i])) {
      //step++;
      return roman(romNum[i], i + 1) + (input % romLet[i]);
    } else {
      //...
    }
  }
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

  outputText = "";
  output.innerText = roman(inputNumber, 0);
  result.classList.remove("alert", "hide");
  userInput.value = "";
}

convertBtn.addEventListener("click", checkUserInput);