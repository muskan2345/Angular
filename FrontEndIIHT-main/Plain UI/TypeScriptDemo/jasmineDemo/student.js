

class Student{
    constructor(id,name,email){
        this.is=id;
        this.name=name;
        this.email=email;
    }

}
class StudentDAO{
    delete(id){
        console.log("not implemented");
    }
    findAll(){
        console.log("processing");
    }
}
class StudentService{
    constructor(dao){
        this.dao=dao;
    }
    delete=(id)=>{this.dao.delete(id)};
    findAll=()=>{this.dao.findAll()};
}
module.exports={Student,StudentDAO,StudentService};