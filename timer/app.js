// watch container
const daysBox = document.querySelector(".days");
const hoursBox = document.querySelector(".hours");
const minutesBox = document.querySelector(".minutes");
const secondsBox = document.querySelector(".seconds");
//buttons
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;

function writeTheTime() {

    secondsBox.textContent = `seconds : ${seconds}`;
    minutesBox.textContent = `minutes : ${minutes}`;
    hoursBox.textContent = `hours : ${hours}`;
    daysBox.textContent = `days : ${days}`;
}


startBtn.addEventListener("click", () => {
    startBtn.disabled = true;

    time = setInterval(() => {  // global scope
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
                if (hours == 24) {
                    hours = 0;
                    days++;
                }
            }
        }

        writeTheTime();

    }, 1000)

    stopBtn.disabled = false;
    resetBtn.disabled = false;

    document.body.classList.add("startBgColor");

});

stopBtn.addEventListener("click", () => {

    startBtn.disabled = false;
    clearInterval(time);

});

resetBtn.addEventListener("click", () => {

    startBtn.disabled = false;
    clearInterval(time);
    days = 0, hours = 0, minutes = 0, seconds = 0;

    writeTheTime();

    document.body.classList.remove("startBgColor");
});











