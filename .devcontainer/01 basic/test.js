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
 let myYoutubename ="jaykumar.com"

 let anothername = myYoutubename
 anothername = " jaybhai.com"

 let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
 }

 let userTwo = userOne

 userTwo.email = "jay@google"