const router=require('express').Router();
const {
        insertUser,
        updateUser,
        removeUser,
        getUser,
        getUsers
    }=require('../model/mock_db')
const {
    validateExisting,
    validateNewUser
} =require('../lib/validate')

router.get('/health',(req,res)=>{
    res.status(200).send("Server is healthy");
})

router.get('/users',
    async (req,res,next)=>{
        const users=await getUsers();
        res.status(200).send(users);
})

router.get('/user',
    validateExisting,
    (req,res,next)=>{
    const name=req.body.name;
    const id=getUser(name);
    res.status(200).send({name:name,id:id});
})

router.post('/user',
validateNewUser,
    (req,res,next)=>{
    const name=req.body.name;
    const id=req.body.id;
    insertUser(id,name);

    res.status(204).send("user create");
})

router.put('/user',
    validateExisting,
    (req,res,next)=>{
    const name=req.body.name;
    const id=req.body.id;
    updateUser(id,name);

    res.status(204).send("user update");
})

router.delete('/user',
    validateExisting,
    (req,res,next)=>{
    const name=req.body.name;
    removeUser(name);

    res.status(204).send("user delete");
})

module.exports=router;