const {validateExisting}=require('../lib/validate');
// const {users}
const request = require("supertest");
const expect=require('chai').expect;
const app=require('../server/index');

describe('test validateExisting',()=>{
    afterAll(() => {
        // Closing the DB connection allows Jest to exit successfully.
        // mongoose.connection.close()
        app.close();
        // await new Promise((resolve,reject)=>{resolve(app.close())});
        // done();
      })
    it('should pass',async()=>{
        const result= await request(app)
                .get("/users")
                .set('Authorization', 'bearer ' + '12342234')
        expect(result.status).to.equal(200);
    })
})