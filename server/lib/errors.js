const errorHandle=async (res,status,msg)=>{
    await res.status(status).send({error: msg,status:status});
    return;
}

module.exports=errorHandle;