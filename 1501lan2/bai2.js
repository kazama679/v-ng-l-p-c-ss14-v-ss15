let a = +prompt("nhập a");
let b = +prompt("nhập b");
let chan =0;
let le =0;
if(a>b){
    for(let i=b+1; i<a; i++){
        if(i%2==0){
            chan +=i;
        } else{
            le +=i;
        }
    }
    console.log("tổng số chẵn = "+chan);
    console.log("tổng số le = "+le);
} else if(b>a){
    for(let i=a+1; i<b; i++){
        if(i%2==0){
            chan +=i;
        } else{
            le +=i;
        }
    }
    console.log("tổng số chẵn = "+chan);
    console.log("tổng số le = "+le);
} else{
    console.log("vui lòng nhập đúng");
}