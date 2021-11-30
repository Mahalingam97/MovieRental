const {user}=require("../models");


var addNewUser = async (req, resp)=> {
    const {userId, userEmail, userName, userPhone, userPassword} = req.body;
    try{
        const users = await user.create({userId, userEmail, userName, userPhone, userPassword});
        return resp.status(200).json(users);

    }catch(e){
        return resp.status(500).json({"message": e});
    }
}
module.exports={
    addNewUser
}