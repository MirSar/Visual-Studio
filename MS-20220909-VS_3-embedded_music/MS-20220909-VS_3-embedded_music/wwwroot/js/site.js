// mouseOver event
function mouseOver() {
    myElement = document.getElementById("colorme");
    myElement.style.color = "green"; // change font color
    myElement.style.fontSize = "36px"; // increase font size
    myElement.innerText = "ENJOY your STUDYING"; // changes the text
    myElement.style.backgroundColor = "gold"; // change background color
    myElement.style.borderRadius = "25px";
}

// mouseOut event
function mouseOut() {
    myElement = document.getElementById("colorme");
    myElement.style.color = "gold";
    myElement.style.fontSize = "20px"; //return to normal font size
    myElement.innerText = "enjoy";
    myElement.style.backgroundColor = "transparent";
}
