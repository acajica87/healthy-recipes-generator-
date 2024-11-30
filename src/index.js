function displayRecipe(response) {
  let recipeText = response.data.answer;

  recipeText = recipeText.replace(/^```html/g, "").replace(/```$/g, "");

  recipeText = recipeText.replace(
    /(Tiempo de preparación:.*?)(\d+.*?minutos)/g,
    function (match, p1, p2) {
      return `<strong style="color: #A3C77C;">${p1}</strong><span style="color: #000000; font-weight: bold;">${p2}</span>`;
    }
  );

  new Typewriter("#recipe", {
    strings: recipeText,
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
    "You are a single mother who works full-time and has limited time for cooking. Your mission is to generate a simple, healthy recipe with only 5 ingredients that you can prepare quickly for your kids. The recipe should be written in basic HTML, with each line separated by a <br/>. Include the preparation time, and make sure the recipe provides a well-balanced meal, incorporating the following: protein, vegetables, complex carbohydrates, healthy fats, and spices/flavors for taste. The recipe should be easy to make, flavorful, and designed to serve four people. At the end of the recipe, sign it with `SheCodes AI` inside a <strong> element, but do not place this at the beginning of the recipe. Everything must be in Spanish.";
  let prompt = `User instructions: Generate a Healthy recipe with ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">⏳ Generating a Healthy recipe with ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
