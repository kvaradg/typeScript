let age: number = 13;

if(age > 18) 
{
    console.log("Adult")
} else
{ 
    console.log("Child")
}


//DATA TYPES
let sales: number = 123_456_789;
let course: string = "Typescript";
let is_published: boolean = true;

//OR
let sales1 = 123_456_789;
let course1 = "Typescript";
let is_published1 = true;
let level; //automatically set data type to "any" 
level = 100;
level = 'qqqq'
//avoid using "any" datatype


//ARRAY's
let numbersArray : number[] = [];
numbersArray[0] = 1;
numbersArray[1] = 2;

//EX
let nums : number[] = [1,2,3,4,5]
console.log(nums.forEach( n => n.toString()))

let fruits : string[] = ['grapes','mango','banana'];
console.log(fruits.map( f => f.includes('a')))

//TUPLE - a tuple is a fixed length array where each element has particular type
let user: [number,string] = [1,'Varad'];
user.push(1)


//ENUM
const small = 1;
const medium = 2;
const large = 3;

//OR
// enum Size { small = 1 , medium , large}
// let mySize : Size = Size.medium;
// console.log(mySize)

//more customise code in js
const enum Size { small = 1 , medium , large}
let mySize : Size = Size.medium;
console.log(mySize)