let number =+prompt("nhập số");
let check = 0;
for(let i=2; i<number; i++){
    if(number%i==0){
        check++;
    }
}
if(check ==0){
    console.log("là số ngto");
} else{
    console.log("k là số ngto");
}