'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "favorites", [{
            userId: 2,
            estateId: 1,
          },
          {
            userId: 2,
            estateId: 2,
          },
          {
            userId: 2,
            estateId: 3,
          },
          {
            userId: 3,
            estateId: 1,
          },
          {
            userId: 3,
            estateId: 3,
          },
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
