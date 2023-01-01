const fun=require("../test");
const helloWorld=fun.helloWorld;
const findLength=fun.findLength;
const upperCase=fun.upperCase;
const alternateCap=fun.alternateCap;
const isPrime=fun.isPrime;
const isEven=fun.isEven;

describe("return hello world",()=>{
    it("should return hello world",()=>{
        expect(helloWorld()).toEqual("hello world");

    });
    it("should return length",()=>{
      

        expect(findLength("abcd")).toEqual(4);
    });


it("function stringLength(nonStr) should throw Error",function(){

    // expect(findLength(123444)).toThrow();  

   

   })

    it("should return upperCase",()=>{
        expect(upperCase("abc")).toEqual("ABC");
    });


    it("function alternateCap() should return alternate uppercase",function(){

        expect(alternateCap("yes")).toEqual("yEs");
       
       
       })

       it("function isEven(num) should check if number is even",function(){

        expect(isEven(4)).toBeTruthy();
    
       });

       it("function isPrime(num) should check if number is even",function(){

        expect(isPrime(4)).toBeFalsy();
    
    
    
       
    
       });
    
    
    
       it("function isPrime(num) should check if number is even",function(){
    
        expect(isPrime(13)).toBeTruthy();
    
    
    
       
    
       });
    

});
