
// Définition des personnages : 

let hero = {
    hpMax : 150,
    hp : 100,
    attaque : 20,
    recup : 10,
    defense : 2, 
}

let ennemi = {
    hpMax : 200,
    hp : 100, 
    attaque : 15,
    recup : 5, 
    defense : 8,  
}

function combat(){
    // Ennemi attaque héro 
    hero.hp -= (ennemi.attaque - hero.defense);
    // On vérifie que le héro n'est pas mort
    if (hero.hp <= 0){
        return console.log("Le Héro est mort");
    }
    // Héro attaque ennemi
    ennemi.hp -= (hero.attaque - ennemi.defense); 
    // On regarde si le héro a tué l'ennemi
    if (ennemi.hp <= 0){
        return console.log("Le héro a gagné !");
    } 
    // Phase de récup 
    hero.hp += hero.recup;
    ennemi.hp += ennemi.recup; 
    // On check l'hp max 
    if (hero.hp >= hero.hpMax){
        hero.hp = hero.hpMax
    }
    if (ennemi.hp >= ennemi.hpMax){
        ennemi.hp = ennemi.hpMax
    }
    console.log("HP Héro = " + hero.hp);
    console.log("HP Ennemi = " + ennemi.hp);
}

let button = document.createElement("button"); 
button.innerHTML += "Lancer un combat"; 
button.addEventListener("click", ()=>{
    console.log("clicked");
    combat();
})

document.querySelector("main").append(button);
