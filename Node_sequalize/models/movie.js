module.exports = (sequelize, DataTypes) => {

    const movie = sequelize.define("movie", {
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
        }
    },{
        timestamps:false
    })

    return movie

}