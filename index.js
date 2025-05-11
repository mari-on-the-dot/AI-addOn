/* function showResults(response) {
  alert(response.data.answer);
}

let apiKey = "2f76b36a73748t15dd07ebbo0f40f91a";
let context = "You enjoy reading science fiction. Be concise in your answers";
let prompt = "What is your absolutely favorite book/saga";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("processing");
axios.get(apiUrl).then(showResults);
*/
function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let userText = instructionsInput.value;

  let apiKey = "2f76b36a73748t15dd07ebbo0f40f91a";

  let prompt =
    "Your mission is to generate a 4 line poem, Each line should be on its own line using <br> tags. Make sure to follow the user instructions. Add a signature at the end 'SheCodes AI' in a <strong> element";
  let context = `User instructions: Generate a short poem in portuguese about ${userText}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
