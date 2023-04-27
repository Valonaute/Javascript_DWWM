const exercice = document.getElementById("exercice");
//Définir un tableau Livres et y stocker deux ou trois éléments
exercice.innerHTML += "<h3>Exercice 1</h3>";



//Afficher le second élément dans la console
exercice.innerHTML += "<h3>Exercice 2</h3>";



//Récupérez la longueur de l'array via sa propriété length
exercice.innerHTML += "<h3>Exercice 3</h3>";



//Afficher tous les éléments dans la console avec une boucle
exercice.innerHTML += "<h3>Exercice 4</h3>";     



//Ecrasez l'élément portant l'index 1, puis réaffichez le tableau  
exercice.innerHTML += "<h3>Exercice 5</h3>";     



//Ajoutez un élément en début de tableau, et un autre à la fin via les methodes push() et unshift()
exercice.innerHTML += "<h3>Exercice 6</h3>";



//Retirez les éléments ajoutés via shift() et pop()
exercice.innerHTML += "<h3>Exercice 7</h3>";



//Créez un second tableau contenant des plats avec quelques entrées
exercice.innerHTML += "<h2>Array et Fonctions</h2>";



//Affichez le contenu du tableau via une boucle automatique forEach(function(element, index){});
exercice.innerHTML += "<h3>Exercice 1</h3>";

let test = ["elementA", "elementB", "elementC"];
test.forEach((element, index) => {
    exercice.innerHTML += index + " = " + element +"<br>";
});
