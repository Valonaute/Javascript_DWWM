// Créer un H1
const h1 = document.querySelector("h1");
h1.innerHTML += "Cibler les éléments du DOM avec Javascript";

// Changer le titre de la première section 
const section1h2 = document.querySelectorAll("section h2")[0];
section1h2.innerHTML += "Voici le titre de la première section";


// Paragraphes dans chaque articles
const article1 = document.querySelectorAll("article")[0];
const article2 = document.querySelectorAll("article")[1];
const article3 = document.querySelectorAll("article")[2];

article1.innerHTML += "Ca y est c'est génial je peux écrire du texte dans mes articles avec JS, j'adore ça !";
article2.innerHTML += "lorem ipsum de ouf t'as vu je fais ça tout seul c'est incroyable !";
article3.innerHTML += "Bon je vais raconter ma journée, je me suis levé tot car j'ai beaucoup dormi, je me suis couché avant 20h sans meme diner c'était incroyable ! ";

// Boutons via une boucle 
let nbboutons = document.querySelectorAll("button");
for (let i=0; i < nbboutons.length; i++){
    const button = document.querySelectorAll("button")[i];
     button.innerHTML += "Plus d'infos..." ;
}

//Donner un ID au second paragraphe ?
const section2 = document.querySelectorAll("section")[1];
section2.id = "section2" ;

document.getElementById("section2").style.color = "red";

// Options : 
// Créer une fonction pour changer le titre de chaque article 
function changertitre (infostitre, numarticle){
    const titremodifie = document.querySelectorAll("article h2")[numarticle];
    titremodifie.innerHTML += infostitre ;
}

// En JS créer une nav avec quelques liens en générant des noeuds avec CreateElement() et Append()
let newnav = document.createElement("nav");
let lien = document.createElement("a");
lien.innerhtml += "Accueil";

// ---------------- style CSS -------------------

// Partie 1 ----
let span1 = document.createElement("span");
span1.innerHTML += "Et modifier le style";
span1.style.color = "red";
h1.append(span1);

// Partie 2 Voir CSS 

// Partie 3 ----
article1.classList.add("ex2");

// Partie 4 ----
let liste = document.createElement("ul");
function createListElement(contenu, couleur){
    let li = document.createElement("li");
    li.innerHTML = contenu; 
    li.style.color = couleur; 
    liste.append(li);
}

createListElement("Faire la vaisselle", "pink");
createListElement("Lancer une lessive", "purple");
createListElement("Passer l'aspirateur", "blue");
createListElement("Ranger ma chambre", "yellow");
createListElement("Lire un livre", "gray");

document.getElementById("list").append(liste);

// Partie 5 ----

let linknav = document.createElement("a");
linknav.innerHTML += "Accueil" ; 
linknav.style.backgroundColor = "indigo" ;
linknav.style.color = "white"; 
document.getElementById("nav").append(linknav);
// Options ----
// Partie 1 ----

span1.after("C'est un sous titre test");

// Partie 2 ----
let liste2 = document.createElement("ul");
let arraylist = ["HTML/CSS", "Javascript", "PHP", "Python", "Kotlin", "Java", "Rubi", "Flutter", "Cyber-sécurité"];
let arraycolors = ["purple", "blue", "red"];
for (let i = 0; i < arraylist.length ; i++){
    let element = document.createElement("li");
    element.innerHTML = arraylist[i];
    element.style.color = arraycolors[0];
    liste2.append(element);
}

document.getElementById("footer").append(liste2);

liste2.style.display = "flex";
liste2.style.justifyContent = "space-around";