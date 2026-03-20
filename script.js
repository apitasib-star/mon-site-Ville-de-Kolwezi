document.getElementById("formEleve").addEventListener("submit",function(event) {
	event.preventDefault();
	//Empêche le rechargement de la page

	//Récupération des valeurs
	const nom=document.getElementById("nom").value.trim();
	const prenom=document.getElementById("prenom").value.trim();
	const age=document.getElementById("age").value.trim();
	const classe=document.getElementById("classe").value;

	const message=document.getElementById("message");
	//Validation
	if(!nom || !prenom || !age || !classe) {
		message.textContent="Veuillez remplir tous les champs.";
		message.style.color="red";
		return;
	}

	if (isNaN(age) || age <=5) {
		message.textContent="L'âge doit être un nombre supérieur à 5";
		message.style.color="red";
		return;
	}

	// Ajout à la liste
	const liste=document.getElementById("listeEleves");
	const nouvelEleve=document.createElement("li");
	nouvelEleve.textContent=`${nom},${prenom}, ${age} ans, classe: ${classe} `;
	liste.appendChild(nouvelEleve);

	//Message de succès
	message.textContent="Elève enregistré avec succès !";
	message.style.color="green";

	//Réinitialiser le formulaire
	document.getElementById("formEleve").reset()

});