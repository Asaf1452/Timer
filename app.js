//
//styles
//
const css = document.createElement("link");
css.rel = "stylesheet";
css.href = "\styleBright.css";
document.head.appendChild(css);
document.querySelector("#brightMode").style.display = "none";
//
//variables
//
let minutes = 5;
let seconds = 0;
let formattedTime = "";
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const select = document.getElementById("selectId");
const massage = document.getElementById("massageId");
let massageChangerCaller = Math.floor(Math.random() * 500);
let interval;
let active = false;
let brightMode = true;
const brightBtn = document.querySelector("#brightMode");
const darkBtn = document.querySelector("#darkMode");

//
//functions
//
const start = ()  => {
    massage.innerHTML = "Now just relax.";
    interval = setInterval( () => {
        massageChangerCaller = Math.floor(Math.random() * 500);
        seconds--;
        if(seconds < 0) {
            minutes--;
            seconds = 59;
        }
        if(minutes < 0){
            alert("Time is up.");
            active = false;
            reset();
        }
        if(massageChangerCaller <= 1400){
            massageChanger();
        }
        display(minutes, seconds);
    },1000)
}

const stop = () => {
    clearInterval(interval);
}

const reset = () => {
    clearInterval(interval);
    selectMinutes();
}

const selectMinutes = () => {
    minutes = select.value;
    clearInterval(interval);
    seconds = 0;
    display(minutes, seconds);
    massage.innerHTML = "Take a break.";
}

const display = (minutes, seconds) => {
    let formattedTime = minutes.toString().padStart(2 , "0") + ":" + seconds.toString().padStart(2, "0");
    document.getElementById('timeId').innerHTML = formattedTime;
}

const massageChanger = () => {
    if(massageChangerCaller === 0)
        massage.innerHTML = "0";  
    if(massageChangerCaller === 1)
        massage.innerHTML = "1";   
    if(massageChangerCaller === 2)
        massage.innerHTML = "2";  
    if(massageChangerCaller === 3)
        massage.innerHTML = "3";   
    if(massageChangerCaller === 4)
        massage.innerHTML = "4";  
    if(massageChangerCaller === 5)
        massage.innerHTML = "5";  
    if(massageChangerCaller === 6)
        massage.innerHTML = "6";  
    if(massageChangerCaller === 7)
        massage.innerHTML = "7";  
    if(massageChangerCaller === 8)
        massage.innerHTML = "8";  
    if(massageChangerCaller === 9)
        massage.innerHTML = "9";  
}
const brightTheme = () => {
    lightMode = true;
    css.href = "\styleBright.css";
    document.querySelector("#brightMode").style.display = "none";
    document.querySelector("#darkMode").style.display = "flex";
}
const darkTheme = () => {
    lightMode = false;
    css.href = "\styleDark.css";
    document.querySelector("#darkMode").style.display = "none";
    document.querySelector("#brightMode").style.display = "flex";
}

//
//events
//
startBtn.addEventListener("click", () => {
    if(active === false){ 
        start();
        active = true;
    }    
});

stopBtn.addEventListener("click", () => {
    stop();
    if(active === true) active = false;
})

resetBtn.addEventListener("click", () => {
    reset();
    if(active === true) active = false;
})

select.addEventListener("change", () => {
    if(active === true) active = false;
    selectMinutes();
    clearInterval(interval);
    display(minutes, seconds);
})
brightBtn.addEventListener("click", brightTheme);
darkBtn.addEventListener("click", darkTheme);
