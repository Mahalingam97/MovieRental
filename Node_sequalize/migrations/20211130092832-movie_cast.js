'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.createTable('movieCast', { 
        MovieId:  DataTypes.UUID,
        Actors: DataTypes.STRING,
        producers: DataTypes.STRING,
        Director: DataTypes.STRING,
        Writer: DataTypes.STRING
  });
     
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('movieCast');
      

  }
};
