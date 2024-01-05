const express = require('express');
require('dotenv').config();

const orderRoutes = require('./api/routes/index');

const app = express();
app.use(express.json());

app.use('/orders', orderRoutes);

app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

app.use((error, req, res, next) => {
    console.error(error.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
