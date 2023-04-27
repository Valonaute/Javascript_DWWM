const exercice = document.getElementById("exercice");


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

exercice.innerHTML += "<h3>Exercice 2</h3>"

let cartons = ["Lit à baldaquin ikea", "bureau noir en bouleau", "table de chevet", "Commode en acajou de grand mère", "Valet de chambre en chêne", "Oupss j'avais oublié un truc"]

function demenagement(element, nbcartons){
    nbcartons++;
    return "Je met sous carton un " + element + " j'ai donc déja chargé " + nbcartons + " cartons. Super ! <br><br>";
}

exercice.innerHTML += demenagement(cartons[0], 0);

exercice.innerHTML += "<h3> exercice 3 </h3>"
let j;

for (j=0; j< cartons.length; j++){
    exercice.innerHTML += demenagement(cartons[j], j);
}

