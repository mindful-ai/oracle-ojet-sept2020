// Determine if a number is prime or not

var n = 2;

var flag = true;

for(i = 2; i < n; i++){
    if(n % i == 0) {
        flag = false;
    }
}

if(flag == true) {
    console.log(n + " is a prime number");
} else {
    console.log(n + " is not a prime number")
}