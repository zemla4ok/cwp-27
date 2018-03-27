const CrudController = require('./crud');

class TweetsController extends CrudController{
    constructor(likesService){
        super(likesService);

        this.readAll = this.readAll.bind(this);

        this.registerRoutes();
    }

    async readAll(req, res){
        let data = await this.service.readChunk(req.query);
        res.json(data);
    }
}

module.exports = (likesService) => {
    const controller = new TweetsController(likesService);
    return controller.router;
}