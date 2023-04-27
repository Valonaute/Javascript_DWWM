const body = document.querySelector("body");
const monitor = document.getElementById("monitor");
let lancerDemenagement;

let ps5 = "Playstation 5";
let velo = "Vélocipède tout terrain";
let tv = "Téléviseur";
let sd = "Steam deck";
let thermoMix = "Thermomix SilverCrest";

/* Création d'objets en classes
let cartons = [];
class Carton{
    constructor(name, description){
        this.name = name;
        this.description = description;
        cartons.push(this);
    }
}
let play = new Carton("Playstation 5", "couleur Blanche, gen1");
/** */

let nbCartons = 1;
let camion = [];
//lancerDemenagement = confirm("Lancer le déménagement?");
function demenager(carton){
    if(lancerDemenagement){
        body.innerHTML += "<h3>Le Déménagement à commencé</h3>";
    } else {
        body.innerHTML += "<h3>En attente de Déménagement</h3>";
    }

    body.innerHTML += `<p>Je met ma ${carton} dans un carton, j'ai ${nbCartons++} cartons</p>`;
    body.innerHTML += `<p>Je met ma ${carton} dans le camion</p>`;
    camion.push(carton);
    
    if(nbCartons>5){
        body.innerHTML += "<p class='fin'>Le déménagement est terminé</p>";
        console.table(camion);
    } else {
        body.innerHTML += "<p class='pending'>Le déménagement est en cours</p>";
    }
}

// On charge les cartons un par uns
demenager(ps5);
demenager(velo);
demenager(tv);
demenager(sd);
demenager(thermoMix);


for(let carton of camion){
    decharger(carton);
}
console.table(camion);

function decharger(carton){
    body.innerHTML += "<p>On décharge le carton contenant le " + carton + "</p>";
}

document.querySelector("button").addEventListener("click", ()=>{
    console.log("click");
    lancerDemenagement = true;
    demenager(ps5);
});