var a;

function show_settings() {
    if(a==1){
        document.getElementById("settings_page").style.display="inline";
        document.getElementById("index").style.display="none";
        return a =0;
    }
    
    else
    {
        document.getElementById("settings_page").style.display="none";
        document.getElementById("index").style.display="inline";
        return a = 1;
    }
}

window.onload = function () {
    document.getElementById("button").onclick = show_settings();
}