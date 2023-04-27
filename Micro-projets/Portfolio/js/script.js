// Créer un portfolio automatique avec des articles (Titre, photo, description, légende photo) générés en automatique 

let article1 = {
    titre : "Bienvenue sur mon blog",
    img : "welcome.png",
    legende : "Voici le logo Philiance, l'organisme de la meilleure formation",
    infos : "Je vais vous présenter ici mes résultats et progrès en informatique, en programmation plus précisément. J'ai commencé en novembre 2022 par une formation AQ-DAM. Puis j'ai entamé une formation DWWM pour continuer l'année prochaine par un bachelor Cybersécurité", 
}

let article2 = {
    titre : "Javascript",
    img : "codeur.jpg",
    legende : "Me voici quand je code...",
    infos : "Après un travail acharné en PHP, HTML/CSS, nous travaillons dur en javascript. C'est un langage super qui permet beaucoup de choses !", 
}

let article3 = {
    titre : "My dream ...",
    img : "vision.jpg",
    legende : "Voici mon Vision board !",
    infos : "Mon rêve est de pouvoir travailler en Remote sur un bateau ou un van aménagé. Je pourrais ainsi voyager, travailler, et profiter de la mer et de la Terre ! Ce serait l'aventure !", 
}

let articles = [
    article1,article2,article3
]

// Création du header 
let header = document.querySelector("header");
header.style.backgroundColor = "gray";
let salut = document.createElement("h1");
salut.innerHTML += "Bienvenue sur mon Portfolio";
header.append(salut);
header.style.textAlign = "center";

function createArticle(article){
    // Création de la zone de l'article (card)
    let card = document.createElement("div");
    
    // Création du titre et ajout a la card 
    let h2 = document.createElement("h2");
    h2.innerHTML += article.titre ; 
    card.append(h2);

    // Création de l'image et ajout a la card 
    let image = document.createElement("img");
    image.setAttribute("src", article.img) ; 
    image.setAttribute("alt", article.legende);
    card.append(image);

    // Création de la légende et ajout a la card 
    let legende = document.createElement("h4");
    legende.innerHTML += article.legende ; 
    card.append(legende);

    // Création du paragraphe et ajout a la card 
    let infos = document.createElement("p");
    infos.innerHTML += article.infos ; 
    card.append(infos);

    // Ajout de la div card à zone main 
    let main = document.querySelector("main");
    main.append(card);

    // Mise en forme CSS
    card.style.maxWidth = "25%";
    card.style.backgroundColor ="gray";
    card.style.borderRadius = "20px";
    card.style.margin = "2vw";
    card.style.padding = "1vw";
    card.style.textAlign = "center";
    image.style.borderRadius = "25px";
    image.style.maxWidth = "90%";
    image.style.margin = "2vh"
    legende.style.margin = "1vw";
    main.style.display = "flex";
    main.style.flexWrap = "wrap";

}

// Automatisation de la création d'article via une boucle
for (let i = 0; i<articles.length; i++){
    createArticle(articles[i]);
}

// Création d'article "a la main"
createArticle(article1);
createArticle(article2);
createArticle(article3);

// Création du footer 
let footer = document.querySelector("footer");
let merci = document.createElement("h4"); 
merci.innerHTML += "Merci d'être venus sur mon Portfolio"
merci.style.marginBottom = "2vw";
footer.append(merci);
footer.style.backgroundColor = "gray";
footer.innerHTML += " &copy Valonaute 2023";
footer.style.textAlign = "center";