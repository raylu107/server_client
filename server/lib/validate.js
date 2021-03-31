const {getUsers}=require('../model/mock_db')
const errorHandle=require('./errors')
const validateExisting=async(req,res,next)=>{
    const users=getUsers();
    try{
        if(!req.body.name){
            return await errorHandle(res,401,"Miss parameter: name")
        }
        const name=req.body.name;
        for(let i in users){
            if(i==name){
                return next();
            }
        }
        return await errorHandle(res,404,"no user");
    }catch(e){
        return await errorHandle(res,500,e)
    }
}
const validateNewUser=async(req,res,next)=>{
    const users=getUsers();
    try{
        if(!req.body.name){
            return await errorHandle(res,401,"Miss parameter: name")
        }
        if(!req.body.id){
            return await errorHandle(res,401,"Miss parameter: id")
        }

        const name=req.body.name;

        for(let i in users){
            if(i==name){
                return await errorHandle(res,403,"user already exist");
            }
        }
        return next();
        
    }catch(e){
        return await errorHandle(res,500,e)
    }
}
module.exports={
    validateExisting,
    validateNewUser
}