//numbers
// let num = 25.325;
// num = 40.5;

//num = Math.floor(num);
//num = Math.trunc(num);
//num = Math.ceil(num);
// num = Math.round(num);
// num **= 2; // num = num ** 2

//strings
// let str = "a'bc'd";
// let str1 = 'a"bc"d';
// let res = +"123" + +56;
// let res1 = "123" - 56;
// let res2 = Math.round("123" / 56);
// let res3 = "123" / "2";
// let res4 = "ab" / 8;

//boolean
// let a = 100;
// let error = true;
// let res = true + true;
// let res1 = true && false;
// let res2 = a || 256 / a;
// let message = error && "some error happenning";
// let re3 = a || 10;
// let res4 = "123" > "9";
// let res5 = "123" > 9;
//equilty operators
let res10 = "123" == 123; //true
let res11 = "123" === 123; //false
//string functions for HW
let str = "aBdTYg";
str = str.toLowerCase(); //"abcdtyg"

// HW #11
function getDigitsSum(number) {
    //computes sum of all digits in the integer part of the number
    // number may be either negative or positive or 0
    if (number < 0) {
        number = -number;
    }
    number = Math.trunc(number);
    let sum = 0;
    do {
        const digit = number % 10;
        number = Math.trunc(number / 10);
        sum += digit;

    } while (number);
    return sum;
}
function computeExpression(expressionStr) {
    //example of expression "9000 / ((10 + 20) ** 2)"
    //returns 10
    //task for searching in Internet
    //only one line code
    //how to use Internet for finding required code
    const res = eval(expressionStr);
    return res;
}
//console.log(computeExpression("9000 / ((10 + 20) ** 2)")) ; //prints 10
//console.log(computeExpression("9 + 100 / 2")); //prints 59
function printAnanas() {
    //TODO 
    //To use only capital "A" "S"
    //print "ananas"
    const res = ("A" + +"A" + "AS").toLowerCase();
    console.log(res);
}
printAnanas() //there should be printed "ananas"

function reverse(number) {
    //returns string with digits of a given number in the reversed order
    //number may be either positive or negative
    //consider only integer part, fractional part should be removed
    //example reverse(1234.56) should return "4321"
    //example reverse (-1234) should return "-4321"
    let res = number < 0 ? "-" : "";
    if (number < 0) {
        number = -number;
    }
    number = Math.trunc(number);
    do {
        const digit = number % 10;
        res += digit;
        number = Math.trunc(number / 10);
    }while(number);
    return res;
}
let n = 10;
let count = 0;
// while (n > 0) {
//     n--;
//     count++;
// }
// do {
//   n--;
//   count++
// } while(n > 0);
while (--n) {
    count++;
}
let d;
// 3 + 7 * "10"
//tests
console.log("result of getDigitsSum(123.45) is " + getDigitsSum(123.45));
console.log("result of getDigitsSum(-280.123) is " + getDigitsSum(-280.123));
console.log("result of getDigitsSum(123) is " + getDigitsSum(123));
printAnanas();
console.log("result of computeExpression('9000 / ((10 + 20) ** 2)') is " + computeExpression('9000 / ((10 + 20) ** 2)'));
console.log("result of computeExpression('9 + 100 / 2') is " + computeExpression('9 + 100 / 2'));
console.log("result of reverse(123.45) is " + reverse(123.45));
console.log("result of reverse(-280.123) is " + reverse(-280.123));
console.log("result of reverse(123) is " + reverse(123));
console.log("result of reverse(-123) is " + reverse(-123));















