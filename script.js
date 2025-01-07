// 1) Masquer la loupe au chargement de la page
window.onload = function () {
    document.getElementById("loader").style.display = "none";
    };


// 2) Capturer l'évènement d'envoi du formulaire et annuler la redirection
document.getElementById('searchForm').addEventListener('submit', function (r) {
    r.preventDefault();
    

    const artist = document.getElementById('artist').value;
    const title = document.getElementById('title').value;
    // Remplacer les espaces par des tirets 
    const formattedTitle = title.replace(/\s+/g, '-'); 

// 3) Rechercher les paroles via l'API et les afficher à l'écran
var lyricsContainer = document.getElementById('lyrics');
const UrlAPI =  https.//lyrics.api.pierre-jehan.com
fetch(UrlAPI)
.then(response => response.json())
.then(data => {

    const songs = data['hydra:member'];
    const lyrics = songs[0].lyrics;
    if (lyrics) {
        document.getElementById('lyrics').innerText = lyrics;
    } else {
        document.getElementById('lyrics').innerText = 'The music you are looking for cant be found';
    }
})


 // 5) Désactiver le bouton d'envoi du formulaire, masquer le texte et afficher la loupe
document.getElementsByName("submit").style.display = "true";
 lyricsContainer.textContent = '';
 document.getElementById("loader").style.display = 'inline';  
   