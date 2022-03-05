const Sequelize = require("sequelize");

class Estate extends Sequelize.Model {
    static init(sequelize) {
        super.init({
          title: Sequelize.STRING,
          description: Sequelize.STRING,
          img_path: Sequelize.STRING,
          lat: Sequelize.STRING,
          lng: Sequelize.STRING,
          price: Sequelize.FLOAT,
          city: Sequelize.STRING,
          neighborhood: Sequelize.STRING,
          phone: Sequelize.STRING,
          isFavorited: Sequelize.BOOLEAN
        }, {
            sequelize,
            modelName: 'Estate',
        });
    }

    static associate(models) {
        this.hasMany(models.Favorite, { foreignKey: "estateId"})
    }
}

module.exports = Estate;