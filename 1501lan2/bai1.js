let number = +prompt("nhập số nguyên dương");
let result =0;
for(let i=0; i<=number; i++){
    console.log( i+1);
    if(result % 2 != 0 && i == number-1){
        break;
    }else{
        result += i;
    }
}
console.log("tổng các số trên là: "+result);