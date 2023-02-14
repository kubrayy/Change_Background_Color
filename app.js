const button = document.getElementById("button");

const getRandomColor = () => {
  let symbols = "0123456789ABCDEF";
  let color = "#";

  for(let i=0; i<6; i++){
    color +=symbols[Math.floor(Math.random()*16)];
  }
  return color
}
const changeBackgroundColor = () => {
  document.body.style.backgroundColor = getRandomColor();
};

button.addEventListener("click",changeBackgroundColor);

window.onload = () => {
  changeBackgroundColor();
}
