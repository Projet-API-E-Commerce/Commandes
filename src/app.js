const express = require('express');
const bodyParser = require('body-parser');

// Importation de la configuration de la base de données (si nécessaire)
const dbConfig = require('./config/db');

// Importation des routeurs
const orderRoutes = require('./api/routes/index');

const app = express();

app.use(bodyParser.json());

// Utilisation des routes pour les commandes
app.use('/orders', orderRoutes);

// Gestion des erreurs 404
app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

// Gestionnaire d'erreurs global
app.use((error, req, res, next) => {
    console.error(error.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
