const button = document.getElementById("escape-btn");
const container = document.querySelector(".container");
const okButton = document.querySelector("#ok-btn");
const card=document.querySelector('.card');

let status = false;

button.addEventListener("mouseover", () => {
  // Get random positions within the container
  const containerRect = container.getBoundingClientRect();
  const buttonRect = button.getBoundingClientRect();

  const maxX = containerRect.width - buttonRect.width;
  const maxY = containerRect.height - buttonRect.height;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  // Move the button to a random position
  button.style.left = `${randomX}px`;
  button.style.top = `${randomY}px`;
  button.style.position = "absolute";
});

function update(value, newValue) {
  value = newValue;
  return value;
}

function state(value) {
  return [value, update];
}

let [value, setValue] = state(false);

okButton.addEventListener("click", () => {
  value = setValue(value, true);
  let div = document.createElement("div");
  let text = document.createElement("h2");
  let image=document.createElement("img");
  image.setAttribute("src", "./95c.png");
  image.setAttribute("class","image");
  text.textContent="I knew you'd say yes. See you then!"
  div.appendChild(text);
  container.appendChild(image);
  container.appendChild(div);
  card.style.display="none";
});
