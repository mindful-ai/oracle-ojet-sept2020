//Install prompt module: npm install prompt

const prompt = require('prompt')
prompt.start()
prompt.get(['number'], function(error, result) {
    console.log("You have input : " + result.number);

    var n = result.number;

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
});
