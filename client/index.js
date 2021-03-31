const readline = require('readline');
const request = require('superagent');
const HttpReq=require('./lib/http_req')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// const command_regex = /[A-Z] ""/;
// const getUsers='http://localhost:3000/users'
// const user='http://localhost:3000/user'

rl.on("line", async function(line) {
  if(line){
    const commands=line.split(' ')
    try{
      const result=await HttpReq.send(
        commands[0],
        commands[1],{},
        commands[2])
      console.log(result.body)
      console.log(`feedback is ${result.body}`)
    }catch(e){
      console.log(e)
    }
  }
});
