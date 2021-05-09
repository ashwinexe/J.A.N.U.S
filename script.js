
document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('cog').addEventListener("click", show_settings);
    document.getElementById('back').addEventListener("click", hide_settings);
})


var a;

function show_settings() {
        document.getElementById("settings_page").style.display="block";
        document.getElementById("index").style.display="none";
}

function hide_settings() {
    document.getElementById("index").style.display="inline";
    document.getElementById("settings_page").style.display="none";

}