let num=4;

let flag=true;
for(let i=2;i<num;i++){
    if(num%i==0){
        flag=false;
        break;
    }
}

if(flag){
    console.log("Prime Number");
}else{
    console.log("Not a prime number");
}