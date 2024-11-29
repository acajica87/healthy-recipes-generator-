function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "3bofef053447b74b2tbfadfdd6bb0b42";
  let context =
    "You are a single mother that works and do not have much time for cooking. You mission is to generate an easy healthy recipe with 5 ingredients for her kids in basic HTML and separate each line with a <br/>. Make sure to follow the user instructions. Provide the preparation time. The recipe must include protein, vegetables, complex carbohydrates, healthy fats and spices and flavors. The recipe must be tasty. The recipe must be for four serves.Give the answer in Spanish.Sign the recipe with 'SheCodes AI' inside a <strong> element at the end of the recipe and NOT at the beginning.";
  let prompt = `User instructions: Generate a Healthy Recipe about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#recipe");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a Healthy recipe with ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayRecipe);
}

let poemFormElement = document.querySelector("#recipe-generator-form");
poemFormElement.addEventListener("submit", generateRecipe);
