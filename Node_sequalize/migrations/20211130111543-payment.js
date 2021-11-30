'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('payment', 
    {
      userMoviesId:{
        type: DataTypes.UUID,
      },
       paymentId:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
  },
  paymentStatus: DataTypes.BOOLEAN
  }) ;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('payment');
  }
};
