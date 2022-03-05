const Sequelize = require("sequelize");
const dbConfig = require("./config/dbconfig");

const User = require("../models/User");
const Estate = require("../models/Estate");
const Favorite = require("../models/Favorite");

const connection = new Sequelize(dbConfig);

User.init(connection);
Estate.init(connection);
Favorite.init(connection);

User.associate(connection.models);
Estate.associate(connection.models);
Favorite.associate(connection.models);

module.exports = connection;