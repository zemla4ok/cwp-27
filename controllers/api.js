const express = require('express');

module.exports = (
    userService,
    tweetService,
    likeService
) => {
    const router = express.Router();

    //defining cntroller
    const userController = require('./user')(
        userService,
        tweetService,
        likeService
    );
    const likesController = require('./tweets')(
        tweetService
    )


    //defining routers
    router.use('/users', userController);
    router.use('/tweets', likesController);

    return router;
}