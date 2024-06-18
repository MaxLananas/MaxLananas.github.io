function toggleFlexbox(className) {
    var flexboxes = document.querySelectorAll('.flexbox');
    flexboxes.forEach(function(flexbox) {
        flexbox.style.display = 'none'; // Cacher toutes les flexbox
    });

    var selectedFlexbox = document.querySelector('.' + className);
    selectedFlexbox.style.display = 'flex'; // Afficher la flexbox sélectionnée
}
window.onload = function() {
    toggleFlexbox('flexbox1');
};
function writeEmail() {
    var composeForm = document.getElementById("compose-form");
    composeForm.style.display = "block";
    var dateField = document.getElementById("email-date");
    var today = new Date();
    dateField.value = today.toISOString().substring(0, 10);
}

function sendEmail() {
    var title = document.getElementById("email-title").value;
    var date = document.getElementById("email-date").value;
    var description = document.getElementById("email-description").value;

    // Vous pouvez ajouter ici le code pour envoyer l'e-mail
    console.log("Titre: " + title);
    console.log("Date: " + date);
    console.log("Description: " + description);

    // Réinitialise le formulaire
    document.getElementById("compose-form").style.display = "none";
    document.getElementById("email-title").value = "";
    document.getElementById("email-description").value = "";
}