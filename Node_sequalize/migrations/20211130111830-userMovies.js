'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('userMovies', 
    {  userMoviesId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4},
      userId: DataTypes.UUID,
      MovieId:DataTypes.UUID,
      Rent_date:DataTypes.DATE,
      Rent_Expired_date:DataTypes.DATE,
      buyed:{
       type:DataTypes.BOOLEAN,
       defaultValue:false
   }});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('userMovies');
  }
};
