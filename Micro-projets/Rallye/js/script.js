// Créer un jeu de rallye avec gestion vitesse / Cap / Pneus / parcours ... etc 

// Création du header, footer
let h1 = document.querySelector("h1");
h1.innerHTML += "Bienvenue dans le jeu de rallye version 50's : Rallye First ";
let h4 = document.querySelector("h4");
h4.innerHTML += "Merci d'avoir joué à Rallye First";
let cp = document.getElementById("copyright");
cp.innerHTML += " &copy Valonaute 2023";

// Création de la nav en ancre : Voiture, circuit, course, infos 
let nav = document.querySelector("nav");
let linkaccueil = document.createElement("a");
linkaccueil.innerHTML += "Accueil";
linkaccueil.setAttribute("href", "#accueil");
nav.append(linkaccueil);
let linkcar = document.createElement("a");
linkcar.innerHTML += "Choisir la Voiture";
linkcar.setAttribute("href", "#car");
nav.append(linkcar);
let linkcircuit = document.createElement("a");
linkcircuit.innerHTML += "Choisir le Circuit";
linkcircuit.setAttribute("href","#circuit");
nav.append(linkcircuit);
let linkrace = document.createElement("a");
linkrace.innerHTML += "Démarrer la Course";
linkrace.setAttribute("href","#race");
nav.append(linkrace);
let linkresult = document.createElement("a");
linkresult.innerHTML += "Résultats - Records";
linkresult.setAttribute("href","#result");
nav.append(linkresult);


// Création d'une section accueil avec mise en scène et Teasing
let textintro = document.getElementById("intro");
textintro.innerHTML += "Ce que vous voyez n'est pas du tout le jeu auquel vous allez jouer !"
let textsuite = document.createElement("p");
textsuite.innerHTML += "Soyez prêts à jouer au jeu de rally le moins immersif de ce dernier demi-siècle...";
document.querySelectorAll("section")[0].append(textsuite);

// Création de la selection de la voiture, ajout slider +/-
let sectioncar = document.getElementById("car");
let img = document.createElement("img");
let x = 1;
img.setAttribute("src", "img/car"+ x + ".jpg"); 

// Ajout de l'incrément et décrément
let buttonright = document.createElement("button");
let buttonleft = document.createElement("button");
buttonleft.innerHTML += "<- Précédente";
buttonright.innerHTML += "Suivante ->";
sectioncar.append(buttonleft);
sectioncar.append(img);
sectioncar.style.display = "flex";
sectioncar.style.justifyContent = "center";
sectioncar.append(buttonright);

// ajout des évènements 
buttonleft.addEventListener("click", ()=> {
    img.setAttribute("src", "img/car"+ (x--) + ".jpg")
    if (x === 0){
        x = 3;
    }
})
buttonright.addEventListener("click", ()=> {
    img.setAttribute("src", "img/car"+ (x++) + ".jpg")
    if (x === 4){
        x = 1;
    }
})
let descriptioncar = document.getElementById("descriptioncar");
let infoscar = document.createElement("p");
/* Créer une classe et créer des voitures avec un constructeur pour avoir les infos de chaque voiture : let cars = [
    car1 = 
] */

let choisir = document.createElement("button");
choisir.innerHTML += "Choisir cette voiture";
descriptioncar.append(choisir);
choisir.setAttribute("id", "choisir");
choisir.setAttribute("href","#circuit");

// ------------------ Section circuit ------------------
// Création de la selection du circuit
let sectioncircuit = document.getElementById("circuit");
let imgcircuit = document.createElement("img");
let xcircuit = 1;
imgcircuit.setAttribute("src", "img/circuit"+ x + ".png"); 

// Ajout de l'incrément et décrément
let buttonrightcircuit = document.createElement("button");
let buttonleftcircuit = document.createElement("button");
buttonleftcircuit.innerHTML += "<- Précédente";
buttonrightcircuit.innerHTML += "Suivante ->";
sectioncircuit.append(buttonleftcircuit);
sectioncircuit.append(imgcircuit);
sectioncircuit.style.display = "flex";
sectioncircuit.style.justifyContent = "center";
sectioncircuit.append(buttonrightcircuit);

// Ajout d'évènement
buttonleftcircuit.addEventListener("click", ()=> {
    imgcircuit.setAttribute("src", "img/circuit"+ (x--) + ".png")
    if (x === 0){
        x = 3;
    }
})
buttonrightcircuit.addEventListener("click", ()=> {
    imgcircuit.setAttribute("src", "img/circuit"+ (x++) + ".png")
    if (x === 4){
        x = 1;
    }
})
// Ajout description 
let descriptioncircuit = document.getElementById("descriptioncircuit");
let infoscircuit = document.createElement("p");
/* A faire :  Créer une classe et créer des voitures avec un constructeur pour avoir les infos de chaque voiture : let cars = [
    car1 = 
] */

let choisircircuit = document.createElement("button");
choisircircuit.innerHTML += "Choisir ce Circuit";
descriptioncircuit.append(choisircircuit);
choisircircuit.setAttribute("id", "choisir");
choisircircuit.setAttribute("href","#race");



// Création de la course, zone d'information, zone graphique, zone d'interface utilisateur, Départ avec timer de Ruben, boite manuelle avec Vmin et Vmax 

// Création de la zone résultat, record etc






