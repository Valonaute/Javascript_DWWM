let exercice = document.getElementById("exercice");
let exerciceB = document.getElementById("exerciceB");
function ecrire(texte, where){
    if(where){
        exerciceB.innerHTML+=texte + "<br>";
    } else {
        exercice.innerHTML+=texte + "<br>";
    }
};

/*Affichage des variables*/
const display = document.getElementById("display");
const nameDisplay = document.getElementById("nameDisplay");
const jobDisplay = document.getElementById("jobDisplay");
const ageDisplay = document.getElementById("ageDisplay");
const posteDisplay = document.getElementById("posteDisplay");
const moyenneDisplay = document.getElementById("moyenneDisplay");
try {
    nameDisplay.innerHTML= prenom + " " + nom;
    jobDisplay.innerHTML+="Métier exercé : " + job;
    ageDisplay.innerHTML+="Age : " + age;
    if(working){
        posteDisplay.innerHTML+="Toujours en poste"
    }
    moyenneDisplay.innerHTML += "Moyenne d'âge : " + resultat;
} catch(e){

}