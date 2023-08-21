
function typeChecker(arg1, arg2) {
    if (typeof arg1 === 'string' && typeof arg2 === 'string') {
        return arg1 + arg2;
    } else if (typeof arg1 === 'number' && typeof arg2 === 'number') {
        return arg1 * arg2;
    } else {
        return 'There are no type matches for operation';
    }
}
console.log(typeChecker(10,5));
console.log(typeChecker('textArg1 ','textArg2'));
console.log(typeChecker('TEXT',6))

function isNegative( number) {
    const result = number < 0 ? 'Yes' : 'No';
    console.log(result);
}
isNegative(-10);
isNegative(5)

function divider(num1, num2) {
    return num1 % num2 === 0;
}
console.log(divider(4,2));
console.log(divider(7,3));
function recursiveAddition(number) {
    if (number <= 10) {
        console.log(number);
        recursiveAddition(number + 2);
    }
}
recursiveAddition(5);