    // 1) Masquer la loupe au chargement de la page
    window.onload = function () {
        document.getElementById("loader").style.display = "none";
    };


    // 2) Capturer l'évènement d'envoi du formulaire et annuler la redirection
    document.getElementById('search-form').addEventListener('submit', function (event) {
        event.preventDefault();
        
        const lyricsContainer = document.getElementById('lyrics');
        
        // 5) Désactiver le bouton d'envoi du formulaire, masquer le texte et afficher la loupe
        document.getElementsByName("submit").disabled = true;
        lyricsContainer.textContent = '';
        document.getElementById("loader").style.display = 'inline'; 

        const artist = document.querySelector("input[name=artist]").value;
        const title = document.querySelector("input[name=title]").value;

        // Remplacer les espaces par des tirets 
        const newtitle = title.replace(/\s/g, '-'); 

        // 3) Rechercher les paroles via l'API et les afficher à l'écran
        const UrlAPI = 'https://lyrics.api.pierre-jehan.com/music?title=' + newtitle + '&artist=' + artist;
        
        fetch(UrlAPI)
        .then(response => response.json())
        .then(data => {

            const songs = data['hydra:member'];
            if (songs.length > 0) {
                const lyrics = songs[0].lyrics;

                document.getElementById('lyrics').innerText = lyrics;
            } else {
                document.getElementById('lyrics').innerText = 'The music you are looking for cant be found';
            }

            // TODO: Réactiver le bouton
            document.getElementsByName("submit").disabled = false;
            // Masquer la loupe une fois les paroles affichées
            document.getElementById("loader").style.display = "none";
        }) 
    });