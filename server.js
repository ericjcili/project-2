const express = require('express');
const sequelize = require('./config/connection');
// for when routes diretory is set up
//const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// for when routes diretory is set up
//app.use(routes);

// sync sequelize models to database & turn on server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now Listening...'));
});