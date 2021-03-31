const errorHandle=async (res,status,msg)=>{
    await res.status(status).send(msg);
    return;
}

module.exports=errorHandle;