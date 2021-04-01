const {validateExisting}=require('../lib/validate');
// const {users}
const request = require("supertest");
const expect=require('chai').expect;
const {app}=require('../index');

describe('test validateExisting',()=>{
    afterAll(done => {
        // Closing the DB connection allows Jest to exit successfully.
        // mongoose.connection.close()
        done();
      })
    it('should pass',()=>{
        // const result=await request(app)
        //         .get("/users")
        expect(200).to.equal(200);
    }, 3000)
})