import express from "express";
import Database from "./database/index.js";
import routes from "./routes/index.js";
import "dotenv/config";

// const Order = require('./models/orderModel');

// Importation de la configuration de la base de données (si nécessaire)
// const { connectDB } = require('./database/config/config');

// Importation des routeurs
// const orderRoutes = require('./routes');
// tout les require en import

const app = express();

//app.use(bodyParser.json());

// Utilisation des routes pour les commandes
//app.use('/orders', orderRoutes);

routes.forEach((router) => {
    app.use(router);
    console.log(`Routes montées depuis ${router.routerName || "un fichier"}:`);
    router.stack.forEach((layer) => {
        if (layer.route) {
            console.log(`   - ${layer.route.path}`);
        }
    });
});

// Gestion des erreurs 404
app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

// Gestionnaire d'erreurs global
app.use((error, req, res, next) => {
    console.error(error.stack);
    res.status(500).send('Something broke!');
});

try {
    await Database.connect();
    await Database.init();
} catch (err) {
    console.error(
    `# Failed to start DB:\n\n${err}`);
}

try {
    const listener = await app.listen(process.env.PORT || 3000);
    console.log(
        `# Server started successfully.\n# Listening on port ${
            listener.address().port
        }.`
    );
} catch (err) {
    console.error(`# Failded to start server:\n\n${err}`);
}