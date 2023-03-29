function Syracus(){

  //récupération du nombre saisie depuis le HTML
  let nombre = document.getElementById("Syracus").value;
  let compteur = 0;
  while (nombre != 1){
    compteur = compteur +1; // compteur ++

    // vérification si nombre est pair ou impair
    if (nombre % 2 == 0){
      nombre = nombre / 2;
    }
    else {
      nombre = 3 * nombre + 1
    }
  }
    console.log(compteur);
}