let a =+prompt("nhập a");
let b =+prompt("nhập b");
let result = 0;
if(a<b){
    for(let i=a+1; i<b; i++){
        result += i;
    }
    console.log(result);
} else if(b<a){
    for(let i=b+1; i<a; i++){
        result += i;
    }
    console.log(result);
} else{
    console.log("vui lòng nhập đúng");
}