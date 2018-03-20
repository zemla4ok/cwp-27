const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParse = require('body-parser');
const YAML = require('yamljs');
//services
const UserService = require('./services/user');


module.exports = (db, config) => {
    const app = express();
    //services
    const userService = new UserService(
        db.users
    );
    

    //controllers
    const apiController = require('./controllers/api')(
        userService,
      
    );

    //Mounting
    app.use(express.static('public'));
    app.use(cookieParser());

    app.use(bodyParse.json());
    app.use('/api', apiController);

    return app;
};
