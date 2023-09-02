var ourImages = [];
ourImages[0]="American-Wisteria.jpg"
ourImages[1]="African-Lily.jpg"
ourImages[2]="African-Marigold.jpg"
ourImages[3]="African-Violet.jpg"
ourImages[4]="Alpenrose.jpg"


var counter = 0;
var interval;

function changeImage() {

    counter++;
    if (counter < 5) {
        var imgg= document.getElementById("img1").src = ourImages[counter];

    } else {
        
        counter = -1;
    }

}

function changeDynamic() {
    interval = setInterval(changeImage, 1000);
}

function stopFunc(){
    clearInterval(interval);
}
function nextFunc(){
    if (counter <4) {
    document.getElementById("img1").src=ourImages[counter+1]
    counter++
    }
    else {
        
        counter = -1;
    }

}
function previousFunc(){
    if (counter<6) {
    document.getElementById("img1").src=ourImages[counter-1]
    counter++
    }
    else {
        
        counter = 1;
    }
}