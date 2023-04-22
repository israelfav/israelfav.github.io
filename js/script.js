function galleryOpen() {
    if(document.getElementById('open').style.display == "grid") {
    document.getElementById('open').style.display = "none";
    document.getElementById('arrow').src = 'img/pics_me/img8.png';
    } else {
    document.getElementById('open').style.display = "grid";
    document.getElementById('arrow').src = 'img/pics_me/img9.png';
    }
}

function videoOpen() {
    if(document.getElementById('video').style.display == "none") {
    document.getElementById('video').style.display = "grid";
    document.getElementById('arrow1').src = 'img/pics_me/img9.png';
    } else {
    document.getElementById('video').style.display = "none";
    document.getElementById('arrow1').src = 'img/pics_me/img8.png';
    }
}

let videoPlayer = document.getElementById("videoPlayer");
let myVideo = document.getElementById("myVideo");

function stopVideo() {
    videoPlayer.style.display = "none";
    // videoPlayer.remove = 'autoplay';
}

function playVideo(file){
    myVideo.src = file;
    videoPlayer.style.display = "flex";
    // videoPlayer.add = 'autoplay';
}






let body = document.querySelector('body');
let btn = document.querySelector('.btn');
let menubar = document.getElementById('menubar');

btn.onclick = function() {
    body.classList.toggle('light');


    if (menubar.style.top === '-100px') {
    menubar.style.top = '100px';
    } else {
        menubar.style.top = '-100px';
    }
}

