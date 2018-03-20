module.exports = (Sequelize, config) => {
    const options = {
        host: config.host,
        dialect: 'mysql',
        logging: false,
        define: {
            timestamps: true,
            paranoid: true,
            defaultScope: {
                where: { deletedAt: { $eq: null }}
            }
        }
    }
    const sequelize = new Sequelize(config.dbName, config.user, config.password, options);

    const User = require('../models/user')(Sequelize, sequelize);
    const Like = require('../models/like')(Sequelize, sequelize);
    const Tweet = require('../models/tweet')(Sequelize, sequelize);

    Tweet.belongsToMany(User, {as: 'Likes', through: Like, otherKey: 'authorId', foreignKey: 'tweetId'});
    User.hasMany(Tweet, {foreignKey: 'authorId'});
    Tweet.belongsTo(User, {foreignKey: 'authorId', as: 'author'});
  
    return {
        users: User,
        tweet: Tweet,
        like: Like,

        Sequelize,
        sequelize,
    };
};