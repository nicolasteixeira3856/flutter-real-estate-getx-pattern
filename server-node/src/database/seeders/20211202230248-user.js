'use strict';

//Senhas: senha123

module.exports = {
  up: async (queryInterface, Sequelize) => {
     return queryInterface.bulkInsert(
      "users", [{
            email: "melissadaianebeatrizcardoso-91@arbitral.com",
            password: "$2a$12$5l.OU6X2DdHCjNdhJz4fIehb7s2QNkvuQtBZIMrFfwLSm4BeFXsJS",
          },
          {
            email: "nicolasteixeira3856@outlook.com",
            password: "$2a$12$5l.OU6X2DdHCjNdhJz4fIehb7s2QNkvuQtBZIMrFfwLSm4BeFXsJS",
          },
          {
            email: "chrono.jap@gmail.com",
            password: "$2a$12$5l.OU6X2DdHCjNdhJz4fIehb7s2QNkvuQtBZIMrFfwLSm4BeFXsJS",
          }
      ], {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
