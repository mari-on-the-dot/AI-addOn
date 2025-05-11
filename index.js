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
function displayJoke(response) {
  new Typewriter("#joke", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
  });
}

function generateJoke(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let userText = instructionsInput.value;

  let apiKey = "2f76b36a73748t15dd07ebbo0f40f91a";

  let prompt =
    "Your mission is to generate a really funny, punch-line joke, Each line should be on its own line using <br> tags. Make sure to follow the user instructions. Add a signature at the end 'SheCodes AI' in a <strong> element";
  let context = `User instructions: Generate a short punch-line joke about ${userText}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let jokeElement = document.querySelector("#joke");
  jokeElement.classList.remove("hidden");
  jokeElement.innerHTML = `<div class="generating">⏳ Generating a joke about ${userText} for you. Hold on</div>`;

  axios.get(apiUrl).then(displayJoke);
}

let jokeFormElement = document.querySelector("#joke-generator-form");
jokeFormElement.addEventListener("submit", generateJoke);
