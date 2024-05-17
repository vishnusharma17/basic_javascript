// console.log("this is my first page of java script ");

// console.log("keywords or data types in javascript  : ---");


// let a = 20;//let keywords
// a = 30;
// let b = null;//null type
// let c = true;//boolean
// let d = BigInt("634"); //bigint
// let e = undefined;//undefined
// const f = Symbol("hello");//symbol
// var g = " my g ";//var keywords
// const h = 45;//const keywords
// {
//     var g= "hyy its g ";//var keywords
//     console.log(g);
// }
// console.log(a,b,c,d,e,f);
// console.log(h);
// console.log(g);
// console.log(g);
// console.log(h);
// console.log(a);

//non premitive data types in java scriptn --- object
// const item = {
//     name : "vishnu",
//     class :2

// };

// console.log(item[" class","name"]);


//object or dict datatype using const keyword

// const dict = {
//     name : "vishnu",
//     roll : 3,
//     class : "mca"
// }
// roll = 4; //not changable
// dict ['name'] = "kasim";// it is a changable
// console.log(dict['roll']);

//using typeof operator to find the type of variable or statement

// let a = "vishnu";
// let b =  6;
// console.log(a+b);
// console.log(typeof(a+b));

// let a = prompt("enter a number for a :")
// a = Number.parseInt(a);
// console.log((a>10)?"you are eligible": "you are  not eligible ")

//airthmatic operator
// console.log("this is airthmatic operator")
// let a = 10;
// let b = 20;
// console.log("this is a addition ",a+b);
// console.log("this is a subtration  ",a-b);
// console.log("this is a division ",a/b);
// console.log("this is a multiplication ",a*b);
// console.log("this is a  modulas",a%b);
// console.log(a+= 5);


//ternary operator
// console.log("this is a ternamry operator")
// console.log(a>b)? "true": "false"

//logical operator
// console.log("this is a logical operator")
// console.log(a>b && a<b);
// console.log(a>b || a<b);
// console.log(!false);

//assignment operator
// console.log("this is a assignment operator ");
// console.log("this is a assignment operator");
// console.log("this is a a==b",a==b);
// console.log("this is a a+=b",a+=b);
// console.log("this is a a<b",a<b);
// console.log("this is a a>b",a>b);
// console.log("this is a a>=b",a>=b);
// console.log("this is a a===b",a===b)

//increment or decrement operator

// console.log("this is a increment operator ");
// let x =20;
// console.log(x++);//20
// console.log(++x);//22
// console.log(--x);//21
// console.log(x--);//21
// console.log(++x);//21
// console.log(++x);//22
// console.log(--x);//21
// console.log(x--);//21
// console.log(++x);//21

//the age between 10 or 20
// let age = 16;
// if(age>10 && age<20){
//     console.log("your age lies beyween 10 or 20 ");

// }
// else{
//     console.log("your age does't lies between 10 or 20");
// }

//switch case
// let age =5;
// switch(age){
//     case 1:{
//         console.log("this is your first age :");
//         break;
//     }
//     case 2:{
//         console.log("this is your second age :");
//         break;
//     }
//     case 3:{
//         console.log("this is your third age :");
//         break;
//     }default:{
//         console.log("this is your default age :");
//         break;
//     }
// }

//ternary operator question
// let age = 16
// console.log((age>18)? "you are eligible for ride " : "you are not eligible for ride ")

//sum of first n natural numbers using for loop

// let sum = 0;
// for(let i = 0; i<10; i++){
//     sum = sum + (i +1);
// }
// console.log("the first 10 natural number is : " , sum );



//simple function in js

// function vishnu(x,y){
//     return (x + y)/2 ;
// }
// console.log("the total  is " + vishnu(1,2));

//using for in loop

// const obj = {
//     name: "vishnu",
//     class: "mca",
// }
// for(let a in obj){
//     console.log("his ",a,"is",obj[a]);
// }

//using for of loop
// const vishnu = {
//     name :"chancha",
//     class : "BA"
// }
// for(let b of "name"){
//     console.log(b)
// }

//strings

// let x ="vishnu"
// console.log(x)

//template literals
// let a = `vishnu`
// let b = `viksash`
// let sharma = `${a} or ${b} is brothers :`
// console.log(sharma)

//escape sequence character
// let a = 'don\'t'
// console.log(a)
// console.log(a.length)

//\r method on a string
// let b = "vi\rshnu"
// console.log(b);

//string methods

// let a = "vishnu"
//length operation
// console.log(a.length)
//touppercase method
// console.log(a.toUpperCase())
//tolowercase method
// console.log(a.toLowerCase())
//slice method
// console.log(a[0],a[3])
// let b =[1,2,3,4,5]
// console.log(b.slice(2,4))
// console.log(2);
//replsce method
// let a = "vishnu"
// console.log(a.replace("shnu","nu"))
//concat method
// let b= "sharma";
// console.log(a.concat(" ",b))
//trim method
// let c =        "krishan"
// let d = c.trim()//another way of trim
// console.log(d)


//arrray or array methods
let a = [19,39,"vishnu",false]
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
a[0] = 31
console.log(a[0])
