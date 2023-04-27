let main = document.querySelector("main");
let img = document.createElement("img");
let x = 5;
img.setAttribute("src", "fille"+ x + ".jpg"); 

// Ajout de l'incrément et décrément
let buttonright = document.createElement("button");
let buttonleft = document.createElement("button");
buttonleft.innerHTML += "<";
buttonright.innerHTML += ">";

main.append(buttonleft);
main.append(img);
img.style.borderRadius = "20px";
img.style.maxWidth = "95vw";
img.style.maxHeight = "90vh";
img.style.margin = "auto";
main.style.display = "flex";
main.style.justifyContent = "center";
main.append(buttonright);

buttonleft.addEventListener("click", ()=> {
    console.log("clicked");
    img.setAttribute("src", "fille"+ (x--) + ".jpg")


})
buttonright.addEventListener("click", ()=> {
    console.log("clicked");
    img.setAttribute("src", "fille"+ (x++) + ".jpg")
})

// Définir une amplitude, faire naviguer dans l'amplitude
// Choisir un design à la fin (retour) 
