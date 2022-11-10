import "./index.css";

const button = document.createElement("button");
button.classList.add("btn");
button.innerText = "BUTTON";
button.addEventListener("click", () => {
  document.getElementById("output").innerText = "Hello World";
});
document.body.appendChild(button);

const output = document.createElement("div");
output.id = "output";
output.classList.add("output");
document.body.appendChild(output);
