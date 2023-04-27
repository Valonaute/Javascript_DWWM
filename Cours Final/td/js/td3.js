const buttons = document.querySelectorAll("button");
const more = document.querySelectorAll(".more");
let frTxt = ["Texte en francais A", "texte en francais B","Texte en francais C", "texte en francais D"];
let enTxt = ["Text in English A", "text in English B","Text in English C", "text in English D"];

let currentLanguage = "fr";

class Blogger{
    constructor(prenom,pseudo,metier,contact){
        this.prenom = prenom, 
        this.pseudo = pseudo, 
        this.metier = metier, 
        this.contact = contact
    }
}

let camille = new Blogger("Camille", "El Camino", "Streamer Minecraft", "elcamino@twitter");
let claude = new Blogger("Claude", "La Claudia", "Chanteuse de Salsa", "claudeSalsa@pinterest.fr");



(function activateButtons(){
    for(let i=0; i<buttons.length; i++){
        buttons[i].innerHTML = "Plus d'infos...";
        buttons[i].addEventListener("click", ()=>{
            more[i].classList.toggle("reveal");
        });
    }
})();

function createMainBlogger(){
    const h3 = document.querySelector("#mainBlogger h3");
    const i = document.querySelector("#mainBlogger i");
    const p = document.querySelector("#mainBlogger p");
    const a = document.querySelector("#mainBlogger a");

    h3.innerHTML = camille.prenom;
    i.innerHTML = camille.pseudo;
    p.innerHTML = camille.metier;
    a.innerHTML = camille.contact;
    a.href = camille.contact;
    
}
createMainBlogger();

function createSecondaryBlogger(blogger){
    let article = document.createElement("article");
    let h3 = document.createElement("h3");
    let i = document.createElement("i");
    let p = document.createElement("p");
    let a = document.createElement("a");

    h3.innerHTML = blogger.prenom;
    i.innerHTML = blogger.pseudo;
    p.innerHTML = blogger.metier;
    a.innerHTML = blogger.contact;
    a.href = blogger.contact;
    article.append(h3,i,p,a);
    document.getElementById("aPropos").append(article);
}
createSecondaryBlogger(claude);

document.querySelector("#langSelector").addEventListener("click", changeLanguage);

function changeLanguage(){
    console.log(currentLanguage);
    let mainTexts = document.querySelectorAll(".mainText");
    let docLang = document.querySelector("html");
    if(currentLanguage === "fr"){
        console.log("condition = true");
        for(let i=0;i<mainTexts.length;i++){
            mainTexts[i].innerHTML = frTxt[i];
        }
        docLang.lang = "fr";
        currentLanguage="en";
    } else {
        console.log("condition = false");
        for(let i=0;i<mainTexts.length;i++){
            mainTexts[i].innerHTML = enTxt[i];
        }
        docLang.lang = "en";
        currentLanguage="fr";
    }
}