
// Nav dynamique -----

let nav = document.querySelector("nav");
nav.innerHTML += "Voici ma nav";
nav.style.backgroundColor = "gray";

// Générateur de texte -----

function gentxt (){
    let button = document.createElement("button");
    button.innerHTML += "Générer du texte";
    button.style.padding = "2vh";
    button.style.margin = "2vh";
    let section = document.getElementById("section");
    let paragraph = document.getElementById("p");
    button.addEventListener("click", ()=>{
        console.log("clicked");
        let paraph = document.createElement("p");
        paraph.innerHTML += "Voici du texte";
        paragraph.append(paraph);
    }
    )
    section.append(button);
}
gentxt();

// Changeur d'arrière plan

let sectionbutton = document.getElementsByTagName("section")[1];
let button = document.createElement("button");
button.innerHTML += "Changer le fond d'écran du body en Rouge";
button.style.padding = "3vh";
button.style.margin = "3vh";
sectionbutton.append(button);
button.addEventListener("click", ()=> {
    console.log("clicked");
    let body = document.getElementsByTagName("body")[0];
    /* if (body.style.backgroundColor = "blue"){ */
        body.style.backgroundColor = "red";
     /* else if (body.style.backgroundColor = "red"){body.style.backgroundColor = "black"} */
})

// Option 

let input = document.createElement("input");
input.setAttribute("type", "color");
input.style.margin = "3vh";
let form = document.getElementsByTagName("form")[0];
form.append(input);
let submit = document.createElement("input");
submit.setAttribute("type", "submit");
submit.setAttribute("value", "Choisir cette couleur");
submit.style.margin = "2vh";
form.append(submit);
submit.addEventListener("click", ()=> {
    console.log("clicked");
    let color = input.value; 
    document.body.style.backgroundColor = color;
})

// Exercices 4 : Testeurs de polices 

let inputtext = document.createElement("input");
inputtext.setAttribute("type", "text"); 
inputtext.style.margin = "3vh"; 
form.append(inputtext);
let submittext = document.createElement("input");
submittext.setAttribute("type", "submit"); 
submittext.setAttribute("value", "Ecrire ce texte");
submittext.style.margin = "2vh";
form.append(submittext);
let div = document.getElementsByTagName("div")[0];
submittext.addEventListener("click", ()=> {
    console.log("clicked text");
    let texttowrite = inputtext.value; 
    let zonedetext = document.createElement("p");
    zonedetext.innerHTML += texttowrite;
    div.append(zonedetext);
})
// Rajouter evenement input (et "change") pour changement en temps réel 


// Je n'ai pas ajouté les différentes polices pour avoir le temps de faire la suite 