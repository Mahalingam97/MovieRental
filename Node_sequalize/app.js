const express=require('express')
const {sequelize}=require('./models');
const {addNewUser}=require("./controllers/usercontroller")
const app=express();
app.use(express.json());

app.get("/",(req,res)=>
{
    return res.json({"message":"Success"})
})

const PORT=5004;
app.listen({port:PORT},async()=>{
    console.log(`server started at ${PORT}`)
    try{
       await sequelize.authenticate();
       console.log("connected");
    }catch(e)
    {
        console.log(e)
    }
})
app.post("/user/addUser",addNewUser)
/* sequelize model:generate --name User --attributes firstname:string, lastname:string*/ 