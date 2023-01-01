const {Student,StudentDAO,StudentService}=require("../student");
let studentArr;
let dao;
let service;
beforeEach(function(){
    let s1=new Student(1,"abc","abc@gm.com");
    let s2=new Student(2,"xyz","xyz@gm.com");
    let s3=new Student(3,"pfq","pfq@gm.com");
    let s4=new Student(4,"ggh","ggh@gm.com");
      studentArr=[s1,s2,s3,s4];
      dao=new StudentDAO();
    //   console.log("here it is",dao);
      service=new StudentService(dao);

});



describe("studentService testing",function(){

    it("should delete the st data",function(){
        spyOn(service,"delete").and.callFake(function(id){
                for(let i=0;i<studentArr.length;i++){
                    if(studentArr[i].id==id){
                        studentArr.splice(i,1);
                    }
                }
                return studentArr.length;

        });

        expect(service.delete(3)).toEqual(studentArr.length);
    });



    it("should find all",function(){

        spyOn(service,'findAll').and.returnValue(studentArr);

        expect(service.findAll()).toEqual(studentArr);

    });

})