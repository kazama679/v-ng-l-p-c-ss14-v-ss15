let n = +prompt("Nhập số nguyên dương");
let a=0, b=1;
for(let i=0; i<n; i++){
    let temp = a;
    a = b;
    b = temp+b;
}
console.log(a);