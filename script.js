const container = document.getElementById('container');
const but32 = document.getElementById("but32");
const but64 = document.getElementById("but64");
const but128 = document.getElementById("but128");
const but16 = document.getElementById("but16");

//container.style.justifyContent = "space-around"
let x= 1.8
function random() {
 let color1 = Math.floor(Math.random() * 257);
 let color2 = Math.floor(Math.random() * 257);
 let color3 = Math.floor(Math.random() * 257);
  color = `rgb(${color1}, ${color2}, ${color3})`
}
let color = window.prompt("Hey artist what color do you want to use ?", "make sure it's a valid color");
if (color = "random") {
  random()
}
function createGrid(grids, x, x) {
    for (let i = 0; i < grids * grids; i++) {
        const gridElement = document.createElement("div");
        gridElement.classList = "grid-item";
        gridElement.style.width = `${x}vw`;
        gridElement.style.height = `${x}vw`;
        gridElement.style.backgroundColor = "white";
        gridElement.style.borderRadius = "2.5px";
        gridElement.addEventListener("mouseover", func);
        container.appendChild(gridElement);
    }};
  function func()
{   
   this.style.backgroundColor = `${color}`
}
but32.addEventListener("click", function () {
  alert("Button 32 was clicked");

});

function sizeGrid(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`
}
function setGrids(size,grids,x,x) {

  sizeGrid(size);
  createGrid(grids, x, x);
}
function resetGrid() {
  container.innerHTML = '';}
