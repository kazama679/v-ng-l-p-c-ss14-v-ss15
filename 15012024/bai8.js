let n = +prompt("Nhập số dương");
let count = 0;
let num = 2;
while(count<n){
    let check = true;
    for(let i=2; i*i <= num; i++){
        if(num%i==0){
            check = false;
            break;
        }
    }
    if(check){
        console.log(num);
        count++;
    }
    num++;
}