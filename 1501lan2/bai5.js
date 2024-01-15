let number =+prompt("nhập số nguyên");
let test = 0; let digit; 
do {
    digit = number %10;
    if(digit%2==0){
        test++;
    }
    number = Math.floor(number/10); 
} while (number>0);
console.log(test);