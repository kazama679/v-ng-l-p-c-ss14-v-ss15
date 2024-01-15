let n=+prompt("nhập số nguyên dương");
let result =0; let number =0;
for(let i=0; i<=n; i++){
    number = number*10 +i;
    result +=number;
}
console.log(result);