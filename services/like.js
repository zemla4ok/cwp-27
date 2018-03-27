const CrudService = require('./crud');
const validator = require('../helpers/validation');

class LikeService extends CrudService{
    constructor(repository){
        super(repository);
    }

    async create(data){
        const validRes = validator.check('likes'. data);
        if(validRes.error){
            return{code:400, message:'validation error'};
        } 
        else{
            return super.create(data);
        }
    }

    async delete(data){
        let like = await this.read(data.id);
        if(!like)
            return {code: 404, message: 'Not Found'};
        if(like.tweetId == data.tweetId && like.authorId == data.authorId){
            return {status:200, message:'OK'};
        }
        else{
            return {status: 404, message: 'you have not rules'};
        }
    }
}

module.exports = LikeService; 