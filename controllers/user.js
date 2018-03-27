const CrudController = require('./crud');

class UserController extends CrudController {
    constructor(userService, tweetService, likeService) {
        super(userService);

        const TweetController = require('./tweet')(tweetService, likeService);
        this.router.use('/:userId/tweets', TweetController);

        this.registerRoutes();
    }
}

module.exports = (userService, tweetService, likeService) => { 
    const controller = new UserController(userService, tweetService, likeService);
    return controller.router;
}