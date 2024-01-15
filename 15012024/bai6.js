let n = +prompt("Nhập số dương");
let N = 0;
while(n != 0) {
    N = N * 10 + n % 10;
    n = Math.floor(n / 10);
}
console.log(N);