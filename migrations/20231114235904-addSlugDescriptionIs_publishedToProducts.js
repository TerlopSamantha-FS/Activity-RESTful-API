'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Products', 'slug', {
      type: Sequelize.STRING,
      defaultValue: null,
      allowNull: true,
    });

    await queryInterface.addColumn('Products', 'description', {
      type: Sequelize.TEXT('long'),
      defaultValue: null,
      allowNull: true,
    });

    await queryInterface.addColumn('Products', 'is_published', {
      type: Sequelize.BOOLEAN,
      defaultValue: null,
      allowNull: true,
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Products', 'slug');
    await queryInterface.removeColumn('Products', 'description');
    await queryInterface.removeColumn('Products', 'is_published');
  }
};