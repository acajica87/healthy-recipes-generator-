function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "Spiced carrot & lentil soup",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#recipe-generator-form");
poemFormElement.addEventListener("submit", generateRecipe);
