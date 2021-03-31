const request=require('superagent');
const {createLogger}=require('winston');

class HttpReq{
    send(route,header,body,options){
        return new Promise((resolve,reject)=>{
            request(route)
                .send(body)
                .retry(3,(err,res)=>{
                    if(err) console.log(err)
                })
                .end((err,res)=>{
                    err? reject(err):resolve(res);
                })
        })
    }
}

module.exports=new HttpReq();