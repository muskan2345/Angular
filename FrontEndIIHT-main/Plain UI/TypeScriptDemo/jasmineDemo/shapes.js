class Shape{

    constructor(length, breadth){

        this.length=length;

        this.breadth=breadth;

    }

}

 

class CreateShape{

 

    constructor(shape){

        this.shape=shape;

    }

    colorCreateShape(){

        return `${this.shape.length} ${this.shape.breadth}`;

        // return null;

    }

 

}

 

class ColorShape{

 

    constructor(createShape){

        this.createShape=createShape;

    }

 

    color(){

        return this.createShape.colorCreateShape();

    }

}

module.exports = {Shape, CreateShape, ColorShape};