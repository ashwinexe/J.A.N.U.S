document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('cog').addEventListener("click", show_settings);
    document.getElementById('back').addEventListener("click", hide_settings);
})


var a;

function show_settings() {
    document.getElementById("email").value = localStorage.getItem("janus-email");
    document.getElementById("settings_page").style.display="block";
    document.getElementById("index").style.display="none";
}

function hide_settings() {
    document.getElementById("index").style.display="inline";
    document.getElementById("settings_page").style.display="none";

}

function saveEmail() {
    localStorage.setItem("janus-email", document.getElementById("email").value);
}

document.getElementById("saveEmail").addEventListener("click", saveEmail);