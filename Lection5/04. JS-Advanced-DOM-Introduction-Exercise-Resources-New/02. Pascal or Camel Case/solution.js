function solve() {
  const validNamingConventions = ["Camel Case", "Pascal Case"];

  const textInputEl = document.querySelector("#text");
  const validNamingConventionsInputEl = document.querySelector("#naming-convention");

  const resultElement = document.querySelector("#result");

  if (!validNamingConventions.includes(validNamingConventionsInputEl.value)) {
    resultElement.textContent = "Error!"; 
    return;
  }

  const wordsArray = textInputEl.value.toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1));

  let resultText = "";

  if (validNamingConventionsInputEl.value === "Pascal Case") {
    resultText = wordsArray.join(""); 
  } else if (validNamingConventionsInputEl.value === "Camel Case") {
    resultText = wordsArray.join(""); 
    resultText = resultText[0].toLowerCase() + resultText.slice(1);
  }

  resultElement.textContent = resultText;
}
