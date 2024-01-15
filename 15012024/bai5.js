let n = +prompt("nhập n");
let S = 0;
for(let i = 1; i<=n;i++){
    S += (1/i)*(1/i)*(1/i);
}
console.log(S.toFixed(5)); 