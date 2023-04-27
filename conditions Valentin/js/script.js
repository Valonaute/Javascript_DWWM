let exercice = document.getElementById("exercice");

/**Affichage HTML : Copiez le code ci dessous et remplacez la valeur par ce que vous voulez afficher dans la section #exercice */
exercice.innerHTML += "<h3>Exercice 1.</h3>";
/*Utilisez un prompt() pour que l'utilisateur vous donne un nombre de 1 a 6. Si le nombre vaut le même que celui qu'on a choisi, Game Over.*/
exercice.innerHTML += "Donnez un nombre entre 0 et 5 :";
/* exercice.innerHTML += "<button id='btn'> Jouer </button> "; */

let btn = document.getElementById("btn");
btn.addEventListener('click', roulette);


/*Utilisez un prompt() pour que l'utilisateur essaie de deviner votre personnage. S'il échoue, proposez un indice. Il pourra ensuite réessayer via f5(réactualiser la page)*/
exercice.innerHTML += "<h3>Exercice 2.</h3>";

exercice.innerHTML += " Deviner un personnage : <button id='btn1'> Jouer </button>";



let btn1 = document.getElementById('btn1');
btn1.addEventListener("click", personnage);

/*Demandez un nombre à l'utilisateur à l'aide de la fonction prompt(), ce sera le nombre de personnes invitées à un repas.
En fonction de ce nombre, indiquez s'il s'agit d'un repas en solitaire, d'un repas intime (4 personnes max), d'un rassemblement (12 personnes max) ou d'un banquet. 
Faites-en sorte que les saisies de nombres négatifs affichent également quelque chose de logique.*/
exercice.innerHTML += "<h3>Exercice 3.</h3>";

let btn2 = document.getElementById('btn2');
btn2.addEventListener("click", diner);


exercice.innerHTML += "<h2>Options.</h2>";
//Ajoutez plusieurs niveaux a la Roulette Russe
exercice.innerHTML += "<h3>Exercice 1.</h3>";

//
exercice.innerHTML += "<h3>Exercice 2.</h3>";


/*Réaliser, à l’aide de conditions, des boucles qui comptent de 0 à 10 et qui n’affichent que les nombres pairs. Une avec une boucle while et une avec une boucle for.*/
exercice.innerHTML += "<h3>Exercice 3.</h3>";
exercice.innerHTML += "<p>Version for:</p>";

exercice.innerHTML += "<p>Version while:</p>";



/*Créez une variable chaine de caractères vide (contenant "").
Créez un rectangle de 10*10 avec un caractère de votre choix comme # */
exercice.innerHTML += "<h3>Exercice 4.</h3>";

//Exemple de boucle JS
for(let i=0; i<5;i++){
    console.log(i);
}


/**/

function roulette () {
    let nbgame = nbaleatoire(5);
    let nbuser = prompt();
    if (nbgame == nbuser){
        exercice.innerHTML += "<h2> GAME OVER </h2>";
        exercice.innerHTML += "<p> Le nombre était " + nbgame ;
    } else {
        exercice.innerHTML += "<h2> CONGRATS !  </h2>";
        exercice.innerHTML += "<p> Le nombre était " + nbgame ;
    }
};

function personnage (){
    console.log("test");
    let perso = "Tyler Durden";
    let guess = prompt();
    if (perso == guess){
        exercice.innerHTML += "<h2> Vous avez trouvé ! </h2>";
    } else {
        exercice.innerHTML += "<p> Indice : c'est le personnage principal de fight club ! </p>";
    }
};


function diner(){
    let nbguest = parseInt(prompt("Entrée un nombre d'invités pour le dîner", ""));
    if (nbguest == 1){
        exercice.innerHTML += "<h2> Ce sera un repas solitaire </h2>"
    } 
    if (1 < nbguest < 5){
            exercice.innerHTML += "<h2> Ce sera un repas intime </h2>"
    } 
    if (4 < nbguest < 13){
                exercice.innerHTML += "<h2> Ce sera un repas rassemblement </h2>"
    } 
    if (12 < nbguest){
                exercice.innerHTML += "<h2> Ce sera un Banquet </h2>"
    } 
    else {
                exercice.innerHTML += "<h2> Le nombre d'invités est insuffisant. </h2>"
    }
};

function nbaleatoire (max) {
    return Math.floor(Math.random() * max);
}

