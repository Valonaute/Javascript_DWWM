// Nav dynamique
/**
 * Ajouter la nav au header d'une page. Le fichier étant lié a toutes les pages, ma nav apparaîtra sur chaque page
    <nav>
        <a href="index.html">index</a>
        <a href="td_2.1.html">td_2</a>
        <a href="td3.html">td3</a>
    </nav>
 * 
 */

let elt = `
<nav>
    <a href="../index.html">Retour</a>
    <a href="index.html">index</a>
    <a href="td_2.1.html">td_2</a>
    <a href="td3.html">td3</a>
</nav>
`;
document.querySelector("header").innerHTML += elt;