const express = require('express');

module.exports = (
    userService,
    teamService,
    workPeriodService,
) => {
    const router = express.Router();

    //defining cntroller
    const userController = require('./user')(
        userService
    );


    //defining routers
    router.use('/users', userController);


    return router;
}