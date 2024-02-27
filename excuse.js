document.getElementById('generateExcuse').addEventListener('click', function() {
    const debut = [
        "Désolé pour mon retard, j'étais en pleine",
        "Excusez mon arrivée tardive, je me suis retrouvé bloqué par",
        "Mon retard? Ah, c'était à cause d'une",
        "Pardon pour le retard, j'ai dû gérer une",
        "Je n'ai pas vu le temps passer, j'étais absorbé par",
        "Le temps m'a totalement échappé alors que je travaillais sur",
        "J'étais en plein debuggage à cause d'une",
        "Ma matinée a été aspirée par une",
    ];
    
    const milieu = [
        "session de refactoring qui a révélé plus de problèmes que prévu avec",
        "urgence sur un serveur qui a décidé de",
        "mise à jour qui s'est mal passée, entraînant",
        "chasse aux bugs interminable dans",
        "tentative de déploiement qui a mal tourné à cause de",
        "réunion qui s'est éternisée suite à une discussion sur",
        "série de tests unitaires qui ont échoué à cause de",
        "optimisation de performance qui a finalement",
    ];
    
    const fin = [
        "des dépendances obsolètes.",
        "un problème de versionnement.",
        "une régression inattendue.",
        "un conflit de merge catastrophique.",
        "une perte de connexion à notre repo Git.",
        "un script de build défaillant.",
        "une fuite de mémoire insaisissable.",
        "une boucle infinie dans le code critique.",
        "un problème de compatibilité entre navigateurs.",
        "une erreur de copier-coller dans le code de production.",
    ];    

    const partieDebut = debut[Math.floor(Math.random() * debut.length)];
    const partieMilieu = milieu[Math.floor(Math.random() * milieu.length)];
    const partieFin = fin[Math.floor(Math.random() * fin.length)];

    document.getElementById('excuse').innerText = `${partieDebut} ${partieMilieu} ${partieFin}`;
});
