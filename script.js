
document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('cog').addEventListener("click", show_settings);
    document.getElementById('back').addEventListener("click", hide_settings);
    document.getElementById('track').addEventListener("click", show_preview);
})

function show_settings() {
        document.getElementById("settings_page").style.display="block";
        document.getElementById("index").style.display="none";
    }
    
    function hide_settings() {
        document.getElementById("index").style.display="inline";
        document.getElementById("settings_page").style.display="none";
        
    }
    
    function show_preview() {
        document.getElementById("data_preview").style.display="block";
        document.getElementById("index").style.display="none";
}