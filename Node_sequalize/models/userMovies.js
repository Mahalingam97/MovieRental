module.exports=(sequelize,DataTypes)=>{
    const userMovies=sequelize.define("userMovies",{
       userMoviesId: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4},
       Rent_date:DataTypes.DATE,
       Rent_Expired_date:DataTypes.DATE,
       buyed:{
           type:DataTypes.BOOLEAN,
           defaultValue:false
       }
    },{
        timestamps:false
    })
    return userMovies;
}