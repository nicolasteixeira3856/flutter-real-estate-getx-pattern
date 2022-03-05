/*'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    /*static associate(models) {
      // define association here
    }
  };
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};*/

const Sequelize = require("sequelize");

class User extends Sequelize.Model {
    static init(sequelize) {
        super.init({
          email: Sequelize.STRING,
          password: Sequelize.STRING
        }, {
            sequelize,
            modelName: 'User',
        });
    }

    static associate(models) {
      this.hasMany(models.Favorite, { foreignKey: "userId"})
    }

}

module.exports = User;