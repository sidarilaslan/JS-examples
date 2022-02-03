const container = document.querySelector("#container");
let boxCount = 225;
const color = [
    "#FFBE0B",
    "#FB5607",
    "#FF006E",
    "#8338EC",
    "#3A86FF",
    "#FF0000",
    "#0AEFFF",
    "#DEFF0A",
];


createBox();

function createBox() {
    let box;
    for (let i = 0; i < boxCount; i++) {
        box = document.createElement("div");
        box.classList.add("box");
        container.appendChild(box);
    }
}

function randomNum() {
    let num = Math.floor(Math.random() * color.length);
    return num;
}

container.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = color[randomNum()];
});
container.addEventListener("mouseout", (event) => {
    setTimeout(() => {
        event.target.style.backgroundColor = "#000";
    }, 1000);
});
