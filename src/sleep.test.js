process.env.NODE_ENV = "test";
const request = require("supertest");

const app = require("../server");

let person = {
    name: "Maria",
    durationBed:"3.5",
    durationSleep:"3"
};

describe("POST /calc",() => {
    test("get sleep score", async ()=>{
       const res = await request(app).post("/calc")
       .send(person);
       expect(res.statusCode).toBe(200) 
       expect(res.body).toEqual({ status: 'OK', sleepScore: 85.71428571428571 });
    })
})