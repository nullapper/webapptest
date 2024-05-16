document.querySelector("#txt").textContent = "Script works yeah!!!";
const btn = document.querySelector("#btn");
let clicked = 0;
btn.addEventListener("click", () => {
  clicked++;
  btn.textContent = `Clicked: ${clicked}`;
});
