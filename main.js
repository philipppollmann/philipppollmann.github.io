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
