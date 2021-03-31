const readline = require('readline');
const request = require('request');
const HttpReq=require('./lib/http_req')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const lines = [];
const callGoogle= async()=>{
    await request('https://www.google.com', function (error, response, body) {console.log("Received google");});
}
async function call(){
    try{
        let rep=await request.get('https://www.go');
        // console.log(rep)
        if(rep.err){
          console.log('error')
        }else{
          console.log('success')
        }
    }catch(e){
        console.log("error")
    }
    
  }
const getUser='http://localhost:3000/users'
rl.on("line", async function(line) {
    if(line==="all"){
      const result=await HttpReq.send(getUser,{},{
        name:"Ray",
        email:"rlu3@gmail"
      })
      console.log(`feedback is ${result.body}`)
    }
    // console.log(line);
    // lines.push(line);
 
    // if (lines.length === 2){ 
    //     const arr1=lines[0];
    //     console.log(arr1)
    // }
});
