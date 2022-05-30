// Problem 412 - Easy
// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true. 


var fizzBuzz = function(n) {
    let answer = []

    for(let i=1; i<=n ;i++){
        let str = ""

        if( i%3==0 ){
            str+= "Fizz"
        }
        if( i%5==0 ){
            str+= "Buzz"
        }

        answer.push( str=="" ? i.toString() : str)
    }

    return answer
};

console.log(fizzBuzz(15))