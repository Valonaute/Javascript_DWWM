let lorem = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab esse modi eveniet beatae, molestiae et qui veritatis porro tenetur aliquam autem adipisci est quae excepturi necessitatibus maiores veniam quasi quidem illum accusantium minima pariatur facilis laboriosam exercitationem? Maxime aperiam doloremque nihil eum dolores incidunt atque non suscipit iusto cumque quisquam eius dicta aspernatur minus repellendus fuga cupiditate. Omnis harum magnam tenetur est quas!";
const h1 = document.querySelector("h1");
h1.innerHTML = "Cibler des éléments du DOM avec JavaScript";
document.querySelector("section h2").innerHTML = "News";

const articlesP = document.querySelectorAll("article p");

articlesP[0].innerHTML += lorem;
articlesP[1].innerHTML += lorem;
articlesP[2].innerHTML += lorem;
articlesP[3].innerHTML += lorem;
articlesP[4].innerHTML += lorem;

let buttons = document.querySelectorAll("button");
for(let button of buttons){
    button.innerHTML += "Plus d'infos...";
}

let premiereSection = document.getElementsByTagName("section")[0];
premiereSection.id= "news";
premiereSection.innerHTML += "<p><hr>(id = " + premiereSection.id + ")</p>";


const articlesTitles = document.querySelectorAll("article h3");
function selectTitle(articleIndex, title){
    articlesTitles[articleIndex].innerHTML = title;
}

selectTitle(2, "Nouveau titre pour le 3ème article");
selectTitle(0, "Fais pas chaud, mais pas froid non plus");

let nav = document.createElement("nav");
let navLink = document.createElement("a");
navLink.innerHTML = "=>Le innerHTML&lt;=";
navLink.href = "../dom.html";
navLink.classList.add("selected");
let navLinkB = document.createElement("a");
navLinkB.innerHTML = "Accueil";
navLinkB.href = "#";
let navLinkC = document.createElement("a");
navLinkC.innerHTML = "A propos";
navLinkC.href="#";


document.querySelector("header").append(nav)
nav.append(navLink, navLinkB, navLinkC);


//TP 2.2

let sousTitre = document.createElement("span");
sousTitre.innerHTML = " et modifier le style";
sousTitre.style.color = "lime";
h1.append(sousTitre);

document.querySelectorAll("article")[2].classList.add("selected");

let liste = document.createElement("ul");
function createListElement(contenu, couleur){
    console.log("test")
    let li = document.createElement("li");
    li.innerHTML = contenu;
    li.style.color = couleur;
    liste.append(li);
}
createListElement("Naruto", "orangered");
createListElement("Bleach", "black");
createListElement("One Piece", "crimson");

document.getElementById("list").append(liste);

