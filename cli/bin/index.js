#!/usr/bin/env node

const yargs = require("yargs");
const HttpReq=require('../lib/http_req')


const options = yargs
 .usage("Usage: -n <name>")
 .option("a", { alias: "action", describe: "CRUD [GET POST PUT DELETE]", type: "string", demandOption: true })
 .option("d", { alias: "search", describe: "NAME [NAME ALL]", type: "string", demandOption: true })
 .argv;

const url=options.search==='ALL'?'http://localhost:3000/users':'http://localhost:3000/user'
async function callFunction(){
  try{
    const result=await HttpReq.send(options.action,url,{},{name:"Chi"});
    console.log(result.body)
  }catch(e){
    console.log(e.status)
  }
}

callFunction()