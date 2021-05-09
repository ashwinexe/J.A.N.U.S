document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('cog').addEventListener("click", show_settings);
    document.getElementById('back').addEventListener("click", hide_settings);
    document.getElementById('track').addEventListener("click", show_preview);
})

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

function show_preview() {
            document.getElementById("data_preview").style.display="block";
            document.getElementById("index").style.display="none";
}

function hide_preview() {
    document.getElementById("data_preview").style.display="none";
    document.getElementById("index").style.display="block";
    document.getElementById("success-alert").style.display="block";
}