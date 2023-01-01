function helloWorld(){
    return "hello world";
}

function findLength(num){
    if(typeof num!=="string"){
        throw new Error("MisTyped error");
    }
    return num.length;
}


function upperCase(tr){
    return tr.toUpperCase();
}

function alternateCap(str){
    let ans="";
    for(let i=0;i<str.length;i++){
        if(i%2!=0){
            ans+=str[i].toUpperCase();
        }else{
            ans+=str[i];
        }
    }
    return ans;
}

function isEven(num){
    return num%2==0;
}
function isPrime(num){
    for(let i=2;i<num;i++){
        if(num%i==0)
        return false;
    }

    return true;
}



exports.helloWorld=helloWorld;
exports.findLength=findLength;
exports.upperCase=upperCase;
exports.alternateCap=alternateCap;
exports.isEven=isEven;
exports.isPrime=isPrime;