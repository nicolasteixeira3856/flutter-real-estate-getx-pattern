const Sequelize = require("sequelize");

class Favorite extends Sequelize.Model {
    static init(sequelize) {
        super.init({
          userId: Sequelize.INTEGER,
          estateId: Sequelize.INTEGER,
        }, {
            sequelize,
            modelName: 'Favorite',
        });
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: "userId" })
        this.belongsTo(models.Estate, { foreignKey: "estateId" })
    }

}

module.exports = Favorite;