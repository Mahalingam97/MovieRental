'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('movies', {
        MovieId:{
          type:DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4
      },
      MovieName:{
         type: DataTypes.STRING,
         allowNull:false
      },
      Poster:{
          type: DataTypes.STRING,
          allowNull:false
      },
      ReleasedYear:{
          type: DataTypes.INTEGER
      },
      Duration:{
          type: DataTypes.INTEGER
      },
      genre:{
          type:DataTypes.STRING
      },
      RentAmt: DataTypes.INTEGER,
      BuyAmt: DataTypes.INTEGER,
      Descrition:{
          type:DataTypes.TEXT,
          allowNull:false
      }});
   
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.dropTable('movies');
    
  }
};
