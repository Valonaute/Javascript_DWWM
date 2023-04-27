// Partie 2 ----

const titredudoc = document.title;
const h1 = document.querySelector("#titre");
h1.innerHTML += titredudoc;
h1.style.textAlign = "center";

const headerdudoc = document.getElementById("header");
headerdudoc.style.backgroundColor = "gray"; 

const article1 = document.getElementsByTagName("article")[0];
article1.style.margin = "5vh";
const article2 = document.getElementsByTagName("article")[1];
article2.style.margin = "5vh";
const article3 = document.getElementsByTagName("article")[2];
article3.style.margin = "5vh";

/* let nbarticles = querySelector("articles"); */
for (let i = 0; i<3 ; i++){
    let button = document.createElement("button");
    button.innerHTML += "Plus d'infos..."; 
    let article = document.getElementsByTagName("article")[i];
    button.style.padding = "2vh";
    button.style.margin = "3vh";
    let paragraph = document.getElementsByTagName("p")[i];
    button.addEventListener("click", ()=>{
        console.log("click");
        if (paragraph.style.display === "none"){paragraph.style.display = "block";}
        else {
            paragraph.style.display = "none";
        }
    })
    article.append(button);
}

const apropos = document.getElementsByTagName("section")[1];

let infos = ["Prénom", "Pseudo", "Métier", "Contact"];
let moi = ["valentin", "Valonaute", "Dév web", "0630642810"]
for (let i = 0 ; i < infos.length ; i++){
    let info = infos[i];
    let moiind = moi[i];
    let zone = document.createElement("h3");
    zone.innerHTML += info + moiind;
    apropos.append(zone);
}
apropos.append(zone);