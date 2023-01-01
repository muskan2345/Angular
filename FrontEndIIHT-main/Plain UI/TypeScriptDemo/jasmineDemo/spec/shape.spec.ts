
const {Shape, CreateShape, ColorShape} = require('../shapes');

describe('color shape testing ',function(){

 it("should call createShape's color by spying createShape's colorCreateShape()",function(){
 let shape = new Shape(10, 20);
let createShape = new CreateShape(shape);
 let colorShape = new ColorShape(createShape);

spyOn(createShape,'colorCreateShape').and.returnValue("10 20");

 expect(colorShape.color()).toEqual("10 20");

})
})

