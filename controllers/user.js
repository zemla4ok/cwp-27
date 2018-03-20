const CrudController = require('./crud');

class UserController extends CrudController {
    constructor(userService) {
        super(userService);

        this.registerRoutes();
    }
}

module.exports = (userService) => { 
    const controller = new UserController(userService);
    return controller.router;
}