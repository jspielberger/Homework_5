let currentTime = new Date();
let thetime = currentTime.toLocaleString('en-US', { dateStyle: "full", timeStyle: "short" })
$("#currentDay").text(thetime);

function myTimer() {
    let currentTime = new Date();
    let thetime = currentTime.toLocaleString('en-US', { dateStyle: "full", timeStyle: "short" })
    $("#currentDay").text(thetime);
}
let displayTime = setInterval(myTimer, 1000);



//set interval function for thetime...
