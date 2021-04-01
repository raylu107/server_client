const request=require('superagent')

class HttpReq{
    send(action,route,header,body,options){
        return new Promise((resolve,reject)=>{
            request[action.toLowerCase()](route)
                .set(header)
                .send(body)
                .retry(3,(err,res)=>{
                    if(err) console.log('err')
                })
                .ok(res => res.status < 600)
                .end((err,res)=>{
                    // if(err){
                    //     console.log('end err')
                    //     reject(err)
                    // }else{
                    //     console.log('end success')
                    //     resolve(res);
                    // }
                    err?reject(err):resolve(res);
                })
        })
    }
}

module.exports=new HttpReq();