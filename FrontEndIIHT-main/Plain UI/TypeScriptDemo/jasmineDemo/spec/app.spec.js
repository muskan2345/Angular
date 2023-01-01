// const  fun= require('../app');
// const  greeting=require('../app');
// const  method2= require('../app');
const {greeting,method2} =require("../app");

describe("greeting",()=>{
    it("should return good morning",()=>{
        expect(greeting()).toEqual("good evening");
    });


    it("should return good",()=>{
        expect(method2()).toEqual("good");
    });
      
});
