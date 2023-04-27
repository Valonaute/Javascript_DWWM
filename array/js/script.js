const exercice = document.getElementById("exercice");
//Définir un tableau Livres et y stocker deux ou trois éléments
exercice.innerHTML += "<h3>Exercice 1</h3>";

 let livres = ["L'ultime secret", "Werther", "Pouvoir illimité", "les 7 habitudes des gens qui reussissent"];



//Afficher le second élément dans la console
exercice.innerHTML += "<h3>Exercice 2</h3>";

exercice.innerHTML += livres[1];

//Récupérez la longueur de l'array via sa propriété length
exercice.innerHTML += "<h3>Exercice 3</h3>";

exercice.innerHTML += livres.length;

//Afficher tous les éléments dans la console avec une boucle
exercice.innerHTML += "<h3>Exercice 4</h3>";     

let i;
for (i=0; i< livres.length ; i++){
    exercice.innerHTML += (livres[i]) + "<br>";
}

//Ecrasez l'élément portant l'index 1, puis réaffichez le tableau  
exercice.innerHTML += "<h3>Exercice 5</h3>";     

livres.shift();
exercice.innerHTML += livres;


//Ajoutez un élément en début de tableau, et un autre à la fin via les methodes push() et unshift()
exercice.innerHTML += "<h3>Exercice 6</h3>";

livres.push("Clé de vie");
livres.unshift("Pouvoir du focus")
exercice.innerHTML += livres;


//Retirez les éléments ajoutés via shift() et pop()
exercice.innerHTML += "<h3>Exercice 7</h3>";

livres.shift();
livres.pop();
exercice.innerHTML += livres;;



//Créez un second tableau contenant des plats avec quelques entrées
exercice.innerHTML += "<h2>Array et Fonctions</h2>";

let plats = ["Lasagnes", "Tagliatelles", "Spaghettis", "linguines"]

//Affichez le contenu du tableau via une boucle automatique forEach(function(element, index){});
exercice.innerHTML += "<h3>Exercice 1</h3>";

plats.forEach(pates => {
    exercice.innerHTML += pates + "<br>";
});

exercice.innerHTML += "<h3>Exercice Cartons</h3>";

let carton0 = "Lit à baldaquin ikea";
let carton1 = "bureau noir en bouleau";
let carton2 = "table de chevet";
let carton3 = "Commode en acajou de grand mère";
let carton4 = "Valet de chambre en chêne";
let nbcartons = 1;

exercice.innerHTML += "Je met sous carton un " + carton0 + " j'ai donc déja " + nbcartons + " cartons prêts";
exercice.innerHTML += "<br></br>"
nbcartons++;

exercice.innerHTML += "Je met sous carton un " + carton1 + " j'ai donc déja " + nbcartons + " cartons prêts";
exercice.innerHTML += "<br></br>"
nbcartons++;

exercice.innerHTML += "Je met sous carton un " + carton2 + " j'ai donc déja " + nbcartons + " cartons prêts";
exercice.innerHTML += "<br></br>"
nbcartons++;

exercice.innerHTML += "Je met sous carton un " + carton3 + " j'ai donc déja " + nbcartons + " cartons prêts";
exercice.innerHTML += "<br></br>"
nbcartons++;

exercice.innerHTML += "Je met sous carton un " + carton4 + " j'ai donc déja " + nbcartons + " cartons prêts";
exercice.innerHTML += "<br></br>"
nbcartons++;

exercice.innerHTML += "<h3>Exercice Déménagement</h3>";



let cartons = ["Lit à baldaquin ikea", "bureau noir en bouleau", "table de chevet", "Commode en acajou de grand mère", "Valet de chambre en chêne", "truc en plus"]

function demenagement(element, nbcartons){
    nbcartons++;
    return "Je met sous carton un " + element + " j'ai donc déja chargé " + nbcartons + " cartons. Super ! <br><br>";
}

/* exercice.innerHTML += demenagement(cartons[0], 0);

let j;

for (j=0; j< cartons.length; j++){
    exercice.innerHTML += demenagement(cartons[j], j);
} */

// Ajout condition True et k = nb cartons chargés

let k = 0;
let statut = confirm("Commencer le déménagement ?") ; 
let camion = [];

if (statut == true && k <5){
    exercice.innerHTML += "Chargement des cartons en cours";
    for (k=0; k< cartons.length; k++){
    exercice.innerHTML += demenagement(cartons[k], k);
    camion.push(cartons[k])
    };
    exercice.innerHTML += "Chargement des cartons terminés, déménagement fini"
} else {
    exercice.innerHTML += "Le chargement n'a pas encore commencé"
    
}

console.log(camion);

