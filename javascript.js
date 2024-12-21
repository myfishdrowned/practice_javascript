console.log('greetings huzz!' + '\n')

// let firstName = 'John'
// let lastName = 'Pork'

// const max = 57
// const actual = max - 13
// const percentage = actual / max

// let s = "my" + ' ' + "string";
// alert(s); // mystring

// Note that if any of the operands is a string, then the other one is converted to a string too.

// For example:

// console.log(('1' + 2));
// console.log((2 + '1'));

// console.log((6 - '2'));
// console.log(('6' / '2'));

// let y = -2;
// console.log((+y)); // -2

// Converts non-numbers
// console.log((+true)); // 1
// console.log((+""));   // 0

// let apples = "2";
// let oranges = "3";

// // both values converted to numbers before the binary plus
// console.log((+apples + +oranges)); // 5

// console.log(2 + 3)

// let name = 'mahi'
// let greeting = `hello I'm ${name}`
// console.log(greeting)

// console.log("the result is ${1 + 2}"); // the result is ${1 + 2} (double quotes do nothing)

// console.log(typeof 'foo')


// let browser = prompt('What is your browser? ')
// if (browser == 'Edge') {
//     alert("You've got the Edge!");
// } else if (browser == 'Chrome'
//     || browser == 'Firefox'
//     || browser == 'Safari'
//     || browser == 'Opera') {
//     alert('Okay we support these browsers too');
// } else {
//     alert('We hope that this page looks ok!');
// }
// sayHello();
// function sayHello() {
//     console.log("Hello!");
// }
// // sayHello();

// function first() {
//     console.log("First");
//     second();
// }

// function second() {
//     console.log("Second");
// }

// first(); // "First" -> "Second"

// function add7(number) {
//     return number + 7;
// }
// number = +prompt('What\'s your number? ')
// console.log(add7(number))

// This is the arrow function version of the above function
// const add7 = (number) => number + 7;

// const number = +prompt('What\'s your number? ')
// console.log(add7(number))

// function multiply(a, b) {
//     return a * b
// }
// a = prompt('first number: ')
// b = prompt('second number: ')
// console.log(multiply(a, b))

// function capitalize(str) {
//     return str[0].toUpperCase() + str.slice(1).toLowerCase();
// }
// str = prompt('What\'s your string? ')
// console.log(capitalize(str))

// function lastLetter(str) {
//     return str[str.length - 1]
// }
// str = prompt('What\'s your string? ')
// console.log(lastLetter(str))


// function greeting(name) {
//     return `hello, ${name}`;
// }
// let name = prompt('What\'s your name? ');
// console.log(greeting(name));

// const carBrands = ["McLaren", "Volvo", "BMW", 'Lexus'];
// const moreCarBrands = ["Honda", "Tesla", "Toyota", 'Pagani'];
// const cars = carBrands.concat(moreCarBrands)
// console.log(cars)
// console.log(cars.at(-1))


// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// let text = "";
// for (let i = 0; i < cars.length; i++) {
//     text += cars[i];
// }
// console.log(text)

// const cars = ['toyota', 'honda', 'lexus', 'nissan', 'infiniti', 'mazda']

// let text = ''
// for (let i = 0; i < cars.length; i++) {
//     text += cars[i] + '\n'
// }
// console.log(text)

// for (i = 1; i < 6; i++) {
//     console.log('loop' + ' ' + i)
//     if (i === 2)
//         break
// }


const names = ['kurapika', 'gon', 'leorio', 'killua']

function listNames(names) {
    for (i = 0; i < names.length; i++)
        console.log(names[i])
}
listNames(names)