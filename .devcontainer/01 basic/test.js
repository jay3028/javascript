// let score = "33"  // this is string  
// let score1 = 33   // this is number 

// console.log(typeof score);
// console.log(typeof (score1));

// let valueInNumber = Number(score)   // this process chnage in string into number 
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// //"33" => 33
// // "33abc" => NaN
// // true => 1; false => 0


// let isLoggedIn = 1   // this procees is used to change into boolean

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// // 1 => true; 0 => false
// // "" => false
// // "hitesh" => true 

// let someNumber = 33 // this procees to change into string

// let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// //------------------------------ OPERATIONS----------------

// let str1 = "hello"
// let str2 = "hitesh"

// let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1"+ 2 +2);
// console.log(1 + 2 + "2");
// console.log((3 + 4) * 5 % 3);

// console.log(+true)

// let gameCounter = 100
// gameCounter++;
// console.log(gameCounter);

//-----------------------------------comparison of  datatypes --------------
// there are two types of datatyped 
// 1-) primitive   and  2-) non- primitive
// primitive 

// 7 types :  string ,number , boolean , null , undefined, symbol , BigInt
 
// const score2 = 100
// const score2Value = 100.3

// const isLoggedIn =false
// const outsideTemp = null
// let userEmail;


// const id = symbol('123')
// const anotherId= symbol('123')
// console.log(id === anotherId);

// // Refrences ( Non Primitive )

// // Array , Object , Function 

// const heros = ["shaktiman" , "naagraj" , "doga"];
// let myObj = {
//     name: "jay",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("hellow world");
// }

// -----------stack(primitive) and heap(Non-primitive) memory

// stag se hame sirf copy milta hai 
//  let myYoutubename ="jaykumar.com"

//  let anothername = myYoutubename
//  anothername = " jaybhai.com"

//  let userOne = {
//     email:"user@google.com",
//     upi:"user@ybl"
//  }

//  let userTwo = userOne

//  userTwo.email = "jay@google"

// ------------------STRING ----------
// const name ="jay"
// const repoCount = 50

// // console .log(name +repoCount + "Value");

// console.log('hello my name is ${name} and my repo count is ${repoCount}');

// const gameName = new String('jay')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameNmae.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

// const newString = gameNamel.substring(0,4)
// console.log(newString);

// const anotherString = gameName.slice(-8,4)
// console.log(newStringOne);
// console.log(newStringOne,trim());

// const url = "https://jay.com/jay%20kumar"

// console.log(url.replace('%20','-'))
// console.log(url.includes('sunder'))

// console.log(gameName.split('-'));

//----------------------Number and Maths --------------
//  const score = 400
//  console.log(score);

//  const balance = new Number(100)
//  console.log(balance);

//  console.log(balance.toString().length);
//  console.log(balance.toFixed(2));

//  const otherNumber = 123.8966

//  console.log(otherNumber.toPrecision(4));

//  const hundreds = 1000000
//  console.log(hundreds.toLocaleString('en-IN'));

//---------------------Maths------------------------

// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4 , 9 , 7 , 6));
// console.log(Math.max(6, 5, 7, 3, 9));


// console.log(Math.random());
// console.log(Math.random() * 10 + 1);
// console.log(Math.floor(Math.random() * 10 + 1));

// const min = 10;
// const max = 20;

// console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// -------------------Dates------------

// let myDate = new Date();
// // console.log(myDate.toString());
// // console.log(myDate.toLocaleString());
// // console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23);
// console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date("01-14-2023");
// // console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now();
// // console.log(myTimeStamp);

// // console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));
// console.log(Math.floor(Date.now()/1000));

// let newDate = new Date();

// console.log(newDate);

// console.log(newDate.getMonth() + 1);

// console.log(newDate.getDate());

// // ${newDate.getDay()} and the time

// newDate.toLocaleString('default' , {
//       weekday: "Long",
//      })

//// array

// const myArr = [0, 1, 2, 3, 4, 5];
// const myHeors = ["shaktiman", "naagraj"];

// const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);
// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// console.log(myArr);
// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join();
// console.log(newArr);

// // slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3);

// console.log(myn1);
// console.log("B ", myArr);
// const myn2 = myArr.splice(1, 3);

// console.log("C ", myArr);

// console.log(myn2);

// --------------------- array part 2 ------------
const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros);

console.log(marvel_heros);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros];

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [8], [9, [4, 5]]];

const real_another_array = another_array.flat(Infinity);

console.log(real_another_array);
console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({ name: "hitesh" })); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));