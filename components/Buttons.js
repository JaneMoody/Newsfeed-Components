const data = ["Button 1", "Button 2", "Button 3", "Button 4"];

function buttonCreator(buttonText) {
  const button = document.createElement("button");
  button.textContent = buttonText;
  button.classList.add("button");
  button.addEventListener("click", function () {
    console.log("clicked!");
  });
  return button;
}

data.forEach((arrayItem) => {
  let newButton = buttonCreator(arrayItem);
  parent.appendChild(newButton);
});

let newComponents = data.map((arrayItem) => {
  let newButton = buttonCreator(arrayItem);
  return newButton;
});

newComponents.forEach((component) => {
  parent.appendChild(component);
});
