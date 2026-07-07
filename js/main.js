/**
 * VAIN yhteystietojen bot-suojaus (yhteystiedot.html)
 * Projektiohjeen 1.3 mukaisesti mitään muuta toiminnallisuutta ei sidota JavaScriptiin.
 */
document.addEventListener("DOMContentLoaded", function() {
    var suojattuAlue = document.getElementById("js-yhteystiedot-suojaus");
    
    if (suojattuAlue) {
        var puhelinSelko = "044 2360 789";
        var puhelinLinkki = "+358442360789";
        var sahkoPosti = "roni.aaltonen08@outlook.com";
        var toimintaAlue = "Länsipori";
        
        var puhelinParagraph = document.createElement("p");
        puhelinParagraph.innerHTML = '<strong>Puhelin:</strong> <a href="tel:' + puhelinLinkki + '">' + puhelinSelko + '</a>';
        
        var sahkoPostiParagraph = document.createElement("p");
        sahkoPostiParagraph.innerHTML = '<strong>Sähköposti:</strong> <a href="mailto:' + sahkoPosti + '">' + sahkoPosti + '</a>';
        
        var alueParagraph = document.createElement("p");
        alueParagraph.innerHTML = '<strong>Toiminta-alue:</strong> ' + toimintaAlue;
        
        suojattuAlue.innerHTML = "";
        suojattuAlue.appendChild(puhelinParagraph);
        suojattuAlue.appendChild(sahkoPostiParagraph);
        suojattuAlue.appendChild(alueParagraph);
    }
});
