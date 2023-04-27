function helloWorld(){
    console.log("Hello World");
}


// Variable a scope étendu (obsolète)
var animalObsolete = "N'utilisez pas var";

// Constante
const PI_CONSTANTE = 3.14159265358979323846264338327950288419716939937510582;

// Variable : Chaîne de caractères - String
let animal = "Chat";

console.log(animal);

// Variable numérique - Number

let age = 19;

// Variable booléene - boolean
let superUser = true;

// let animalB = chien;
animal = "Chien";

//let animal = "Tardigrade"; //SyntaxError
function displayAnimal(){
    console.log(animal);
}

function increment(){

    //Incrémentation
    age ++;
    console.log(age)
    //Décrémentation
    age --;

    // Incrémentation avec choix de la valeur
    age += 4;
    console.log(age);

    let nombreMalTypé = "14";
    console.log(age + nombreMalTypé);
}

function concatenation(){

    // Concaténations
    console.log("J'ai " + age + " ans et j'ai un " + animal + "il s'appelle \"Medor\"");
    console.log('il s\'appelle "medor"')
    
    console.log(`J'ai ${age}, et j'ai un ${animal} et il s'appelle "Médor"`);
}
    
//Opérateurs Arithmétiques
//+-*/%

// Array JavaScript
function array(){

    let fruits = ["Pomme", "Poire", "Prune"];
    
    console.table(fruits);
    // Acceder a un élément par son index
    console.log(fruits[2]);
    
    // Ajouter des éléments à l'Array
    fruits.push("Kiwi", "Banane");
    console.table(fruits);
    
    // Supprimer le dernier élément du tableau
    fruits.pop();
    console.table(fruits);
    // Supprimer le premier élément du tableau
    fruits.shift();
    console.table(fruits);
    fruits[2]= "Orange";
    fruits.push("Raisin", "Durian", "Litchi", "Fraise");
}

function arrayTable(){

    //
    console.clear()
    console.table(fruits);
    // Choisir un index et supprimer / remplacer les valeurs suivantes splice(indexDeDepart,nbreDElementsConcernes,valeurDuRemplacement);
    fruits.splice(4,1, "Framboise");
    
    // Classer les valeurs du tableau par ordre alphanumérique
    fruits.sort();
    console.table(fruits);
    
    //Connaitre la longueur du tableau
    console.log(fruits.length);
}

//Objets JS

let voiture = {
    annee : 2002,
    marque : "Audi",
    modele : "RS6"
}

//console.log(voiture.marque);

//Conditions if ... else

function verifAge(){
    let majeur = confirm("Si vous êtes mineur, vous n'avez pas le droit d'accéder au site");
    
    if(majeur){
        alert("Bienvenue");
    } else {
        alert("Non");
        window.location.href="https://google.fr";
    }
}

function weather(){

    let meteo = "Beau temps"; 
    let vent = "Pas de vent";
    
    if(meteo === "Beau temps" && vent === "pas de vent"){
        monitor.innerHTML += "Il fait beau, je peux sortir en short";
    }else if(meteo === "Beau temps" && vent !== "pas de vent"){
        monitor.innerHTML += "Il fait beau mais en fait on va mettre un pantalon";
    }
}

//Conditions switch

function checkColor(couleur){

    couleur = "Bleu";
    
    switch(couleur){
        case "Bleu":
            monitor.innerHTML += "<b>Vous avez besoin de Rouge</b>";
        break;
        case "Orange":
            monitor.innerHTML += "<b>Vous avez besoin de Orange</b>";
        break;
        default:
            monitor.innerHTML += "<b> Vous avez besoin de Lunettes</b>";
    }
}
//checkColor("Orange");

//Opérateur ternaire
//if(age>=18){ console.log("Bonjour monsieur")} else {console.log("Bonjour petit")}

const salutations = () =>{
    age>=18 ? console.log("Bonjour monsieur") : console.log("Bonjour petit");
}

function fonctionsAuto(){
    (function autofonction(parametres){
        console.log("Fonction auto " + parametres);
    })("activée");
    (function (e){
        console.log("fonction" + e);
    })(" anonyme");
    ((e)=>{
        console.log("fonction" + e);
    })(" fléchée anonyme");
}

let pieceDispo = "turbo";

function reparerVoiture(voiture){
    if(pieceDispo === "turbo"){
        console.log("Mise au garage de " + voiture);
        voiture += " réparée";
        return true;
        console.log("Code inaccessible");
    } else {
        return false;
    }
}

if(reparerVoiture()){
    monitor.innerHTML = "On peut rouler";
} else {
    monitor.innerHTML = "La voiture reste au garage";
}

let iterateur = 0;

while(iterateur<5){
    iterateur===0?monitor.innerHTML +="<h4>Boucles</h4>" : "";
    monitor.innerHTML += iterateur +",";
    iterateur++;
}

do{
    monitor.innerHTML += iterateur +" (do while),";
    iterateur--;
}while(iterateur>0);

for(let i=0; i<5; i++){
    monitor.innerHTML += i +"(for),";
}

let films = ["John Wick 4", "Camping Paradis", "Le silence des Agneaux", "Space Jam"];

for(let film of films){
    monitor.innerHTML += "<p>" + film + "</p>";
}

let artiste = {
    nom : "Stevie Wonder",
    style : "Soul",
    genre : "Musique"
}

for(let propriete in artiste){
    monitor.innerHTML += "<p>"+ propriete + "</p>";
    monitor.innerHTML += "<p class='data'>"+ artiste[propriete] + "</p>";
}
