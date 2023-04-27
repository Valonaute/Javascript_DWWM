
let form = document.createElement("form");
form.setAttribute("action", "#");
form.setAttribute("method", "get");
let main = document.querySelector("main");
main.append(form);

let label1 = document.createElement("label");
label1.innerHTML += "1er chiffre : ";
form.append(label1);

let inputnb1 = document.createElement("input");
inputnb1.setAttribute("type", "number"); 
form.append(inputnb1);

let labelope = document.createElement("label");
labelope.innerHTML += "Opérande : ";
form.append(labelope);

let ope = document.createElement("input");
ope.setAttribute("type", "text");
form.append(ope);

let label2 = document.createElement("label");
label2.innerHTML += "2ème chiffre : ";
form.append(label2);

let inputnb2 = document.createElement("input");
inputnb2.setAttribute("type", "number");
form.append(inputnb2);

let submit = document.createElement("input");
submit.setAttribute("type", "submit");
submit.innerHTML += "Calculer";
form.append(submit);

submit.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log("clicked");
    calcul(ope);
    h2.innerHTML += "Voici le résultat : " + result ;
})

form.style.display = "flex";
form.style.flexDirection = "column"
form.style.maxWidth = "40%"
inputnb1.style.margin = "1.5vh";
inputnb2.style.margin = "1.5vh";
ope.style.margin = "1.5vh";
submit.style.margin = "1.5vh";
label1.style.marginLeft = "15vw";
labelope.style.marginLeft = "15vw";
label2.style.marginLeft = "15vw";



/* premier niveau : 

let nb1 = parseInt(prompt("1er chiffre"));
let ope = prompt("Opérande");
let nb2 = parseInt(prompt("2ème Chiffre"));
 */
let result ; 

function calcul(ope){
    console.log(ope.value);
    switch(ope.value){
        case "+":
            result = Number(inputnb1.value) + Number(inputnb2.value);
        break;
        case "-":
            result = Number(inputnb1.value) - Number(inputnb2.value);
        break;
        case "*":
            result = Number(inputnb1.value) * Number(inputnb2.value);
        break;
        case "/":
            result = Number(inputnb1.value) / Number(inputnb2.value);
        break;
        default: 
            result = "Veuillez compléter le formulaire";
    
    }
    console.log(result);
}

let h1 = document.createElement("h1");
let h2 = document.createElement("h2");
const header = document.querySelector("header");
h1.innerHTML += "Bienvenue sur la calculatrice en ligne";
 

header.append(h1);
main.append(h2);

let button = document.createElement("button");
button.innerHTML += "Nouveau calcul" ; 
main.append(button);
// window.location.reload(); > Recharger la page

