function navReveal() { 
    document.getElementById('menu').style.right = "0"
}
function navHide() { 
    document.getElementById('menu').style.right = "-500px"
}
function galleryOpen() {
    if(document.getElementById('open').style.display == "grid") {
    document.getElementById('open').style.display = "none";
    document.getElementById('arrow').src = 'img/pics_me/arrowfore.png';
    } else {
    document.getElementById('open').style.display = "grid";
    document.getElementById('arrow').src = 'img/pics_me/arrowups.png';
    }
}

function videoOpen() {
    if(document.getElementById('video').style.display == "none") {
    document.getElementById('video').style.display = "grid";
    document.getElementById('arrow1').src = 'img/pics_me/arrowups.png';
    } else {
    document.getElementById('video').style.display = "none";
    document.getElementById('arrow1').src = 'img/pics_me/arrowfore.png';
    }
}

var videoPlayer = document.getElementById("videoPlayer");
var myVideo = document.getElementById("myVideo");

function stopVideo() {
    videoPlayer.style.display = "none";
}

function playVideo(file){
    myVideo.src = file;
    videoPlayer.style.display = "flex";
}
function suber() {
    document.getElementById('sub').style.display = 'block';
}