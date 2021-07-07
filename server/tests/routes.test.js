const request = require('supertest')
const app = require('../app')
const authtoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGNkY2ZmMzEwY2RiNzIyMzMxZDFlNDgiLCJpYXQiOjE2MjQ1NDk5NDksImV4cCI6MTYyNDU1NzE0OX0.FETZWdBpo4oBjEew8cOzUUzboZzwDov01fiqWZsulX8'
const connectDB = require('./../config/db');
const dotenv = require('dotenv');
const mongoose = require('mongoose')
dotenv.config(); //To access/config the DB connection token

describe('post and get routes',() => {
    beforeAll(async () => {
        await mongoose.connect(process.env.DB_CONNECT, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          });
    });
    
    afterAll(async () => {
        mongoose.connection.close();
    });
    it('should fetch dashboard',(done)=>{
        request(app)
        .get('/api/fungus/get/dashboard')
        .set({'auth-token':authtoken})
        .expect(200,(err, res) => {
            if (err) {
                return done(err)
            }
            else return done()
        })
    })
})