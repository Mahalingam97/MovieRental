module.exports=(sequelize,DataTypes)=>{
    const payment=sequelize.define("payment",{
      paymentId:{
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4
      },
      paymentStatus: DataTypes.BOOLEAN
    },{
        timestamps:false
    })
    
    return payment;
}