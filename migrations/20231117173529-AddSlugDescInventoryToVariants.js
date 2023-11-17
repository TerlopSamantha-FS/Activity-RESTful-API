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
    await queryInterface.addColumn('Variants', 'slug', {
      type: Sequelize.STRING,
      defaultValue: null,
      allowNull: true
    })
    await queryInterface.addColumn('Variants', 'description', {
      type: Sequelize.TEXT,
      defaultValue: '',
      allowNull: false
    })
    await queryInterface.addColumn('Variants', 'inventory', {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      allowNull: false
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Varaints', 'slug')
    await queryInterface.removeColumn('Varaints', 'description')
    await queryInterface.removeColumn('Varaints', 'inventory')
  }
};
