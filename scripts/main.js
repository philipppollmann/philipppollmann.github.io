// Image Slide Animation
const bilder = document.querySelectorAll('.imageslider img');
let verzögerung = 0;

bilder.forEach(bild => {
    setTimeout(() => {
        bild.style.transform = 'translateX(0)';
        bild.style.opacity = '1';
    }, verzögerung);
    verzögerung += 100;
});




//
const chk = document.getElementById('checkbox');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

function setDarkMode(){
    document.cookie = "theme=dark; expires=Fri, 31 Dec 2023 23:59:59 UTC";
}

function setLightMode(){
    document.cookie = "theme=light; expires=Fri, 31 Dec 2023 23:59:59 UTC";
}

function getThemeFromCookie(){
    var cookie = document.cookie.split(";")
    cookie = cookie[i].trim();
    for(var i = 0; i < cookie.length; i++){
        if (cookie.indexOf("theme")){
            var theme = cookie.substring("theme".length, cookie.length);
            return theme;
        }
    }
}

function ShowCookiePopup(){

}

// Uhr
const currentTime = () => {
    const element = document.querySelector("")

    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let time = `${hour}:${minutes}:${seconds}`;
    element.innerText = time;
}

currentTime();
setInterval(currentTime, 1000);
