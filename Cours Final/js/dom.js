// Récapitulatif des selecteurs
    // Sélécteurs classiques
const sectionCiblage = document.getElementById("ciblage");
const liClassRed = document.getElementsByClassName("red")[1];
const ciblageBalise = document.getElementsByTagName("h2")[0];

    // Selecteurs par requète
const querySelector = document.querySelectorAll("#ciblage .red");
const querySelectorFirstElement = document.querySelector(".red");


const ol = document.querySelectorAll("ol")[0];

//Edition du html interne d'un élément
document.querySelector("li").innerHTML = "Premier élément de liste";

//Appel de balise dans le html interne d'un élément
ol.innerHTML += "<li>Cinquième élément - ajout JS via innerHTML</li>";

//Création d'éléments par noeud du DOM (bonne pratique) 
function createNewListItem(){
    let li = document.createElement("li");
    li.innerHTML = "Sixième élément - création via createElement() et ajout via append()";
    ol.append(li);
};

//Récupération du contenu d'une balise pour le donner à une autre
const h1 = document.querySelector("h1");

h1.innerHTML = document.querySelector("title").innerHTML;

// Edition du style d'un élément (h1)
h1.style.background = "#222";
h1.style.color = "#eee";
h1.style.margin = "0";
h1.style.padding = "1em";
h1.style.textAlign = "right";

//Changement d'une classe : ajout
document.querySelector("footer").classList.add("identity");

document.querySelector("button").addEventListener("click", createNewListItem);

function obsolete(){
    alert("cette fonction est obsolète! A n'utiliser qu'avec un framework");
}

function changeColor(element){
    element.classList.toggle("fancyTitle");
}

document.querySelector("#color").addEventListener("click", function(){
    changeColor(h1);
});

let input = document.querySelectorAll("input");
let select = document.querySelector("select");
let p = document.querySelector("p");

input[0].addEventListener("input", (e)=>{
    //console.log(input.value)
    console.log(e)
    p.innerHTML = input.value;
})

select.addEventListener("change", ()=>{
    document.getElementById("selectResult").innerHTML = select.value;
    document.querySelector("body").style.background = select.value;
});

document.querySelectorAll("li")[2].addEventListener("mouseout", bonjour);

function bonjour(){
    alert("Bonjour!")
}

let timeMonitor = document.getElementById('timeMonitor');
timeMonitor.innerHTML += `<p>${Date.now()}</p>`
timeMonitor.innerHTML += `<p>${Date()}</p>`

let count = 1;

function launchOnce(){
    setTimeout(()=>{
        timer(count);
    }, 1000);
    function timer(time){
        timeMonitor.innerHTML = `<p>${time}</p>`;
        count++;
    }
}
function launchForEver(){
    setInterval(()=>{
        timer(count);
    }, 1000);
    function timer(time){
        timeMonitor.innerHTML = `<p>${time}</p>`;
        count++;
    }
}
launchForEver();