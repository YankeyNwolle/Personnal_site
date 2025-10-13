// déclaration de la variable

var bouton = document.getElementById('buton1');

// l'évènement au click

bouton.addEventListener('click', function() {
    
    if(bouton.innerText === "VOIR PLUS") {

        bouton.innerText = "voir moins";
        bouton.style.backgroundColor = "green";

    } else {
        bouton.innerText = "VOIR PLUS";
        // il reprend sa couleur d'origine
        bouton.style.backgroundColor = "";
    }
   
});

// déclaration de la variable pour le bouton 2

var bouton2 = document.getElementById('buton2');

// l'évènement au click

bouton2.addEventListener('click', function() {
    
    if(bouton2.innerText === "VOIR PLUS") {

        bouton2.innerText = "voir moins";
        bouton2.style.backgroundColor = "red";

    } else {
        bouton2.innerText = "VOIR PLUS";
        // il reprend sa couleur d'origine
        bouton2.style.backgroundColor = "";
    }
   
});

// déclaration de la variable pour le bouton 3

var bouton3 = document.getElementById('buton3');

// l'évènement au click

bouton3.addEventListener('click', function() {
    
    if(bouton3.innerText === "VOIR PLUS") {

        bouton3.innerText = "voir moins";
        bouton3.style.backgroundColor = "white";
        bouton3.style.color = "black";

    } else {
        bouton3.innerText = "VOIR PLUS";
        // il reprend sa couleur d'origine
        bouton3.style.backgroundColor = "";
    }
   
});