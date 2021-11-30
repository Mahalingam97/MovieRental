module.exports=(sequelize,DataTypes)=>{

    const movieCast=sequelize.define("movieCast",{
        Actors: DataTypes.STRING,
        producers: DataTypes.STRING,
        Director: DataTypes.STRING,
        Writer: DataTypes.STRING
    },{
        timestamps:false
    })
    return movieCast;
}
