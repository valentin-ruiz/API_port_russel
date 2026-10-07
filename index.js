const express = require('express');
const cors = require ('cors');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Données en exemple
const utilisateurs = [
	{ id: 1, nom: 'Alice' },
	{ id: 2, nom: 'Bob' },
]

// Route GET : Récupère l'ensemble des utilisateurs
app.get('/api/utilisateurs', (req, res) => {
	res.json(utilisateurs);
});

// Route POST : Permet l'ajout d'un nouvel utilisateur
app.post('/api/utilisateurs', (req, res) => {
	const nouvelUtilisateur = {
		id: utilisateurs.length + 1,
		nom: req.body.nom
	};
	utilisateurs.push(nouvelUtilisateur);
	res.status(201).json(nouvelUtilisateur);
});

// Démmarrage du serveur
app.listen(port, () => {
	console.log('Serveur en écoute sur http://localhost:${port}');
});