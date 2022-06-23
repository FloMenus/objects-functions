// 1- Objects

// const cat = {
//     name:"Garfield",
//     age: 3,
//     isCute: true,
// }

// console.log (cat)
// console.log (`Il a ${cat.age} ans`)

// ////////////////////

// const isCatCute = (cuteness) => {
//     if (cuteness) {
//         cutenessResult ="So cute!";
//         return cutenessResult;
//     }

//     else {
//         cutenessResult = "Meh"
//         return cutenessResult;
//     }
// }

//     cutenessResult= isCatCute (cat.isCute)
//     console.log (cutenessResult)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2 - Combine 

// const cat = {
//     name:"Garfield",
//     age: 3,
//     isCute: true,
// }

// const cat2 = {
//     name: "Kaaris",
//     age: 8,
//     isCute: false,
// }

// var cats =  [cat,cat2]

// console.log (cats)

// /////////////////

// console.log (cat.age)

// const garfieldAge = Object.values(cat)[1]
// console.log (`L'age de Garfield depuis le tableau = ${garfieldAge}`)

// console.log (cat2.age)

// const KaarisAge = Object.values(cat2)[1]
// console.log (`L'age de Kaaris depuis le tableau = ${KaarisAge}`)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3- Even

// const checkIfEven = (num) => {
//     if (num % 2 === 0) {
//     return "even"
//     }
//     else {
//         return "odd"
//     }
// }

// const number = checkIfEven (57)


// console.log (number)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4- Compare

// const compare = (x,y) => {
//     if (x > y){
//     return "x is bigger"
//     }

//     else if (x < y) {
//         return "y is bigger"
//     }

//     else {
//         return "both are the same"
//     }
// }

// const number = compare(50,40)
// const number2 = compare(28,50)
// const number3 = compare(190,190)
// console.log (number, number2, number3)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5- Add Up (PAS COMPRIS)

// const addUp = (num) => {
//      for (i=1; i<= num; i++) {

//      }
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6- Time

// let hours = 0
// let minutes = 0


// const format = (num) => {
//     // Faire une division de num par 60 pour les minutes
//     // Faire un modulo de num par 60 pour les secondes

//     let minutes = num / 60;
//     let seconds = num % 60

//     // while minuts >= 60, hours +1

//     while (minutes >= 60) {
//         hours = hours + 1
//         minutes = minutes - 60
//     }

//     let minutesFloored = Math.floor(minutes)

//     return `${hours}:${minutesFloored}:${seconds}`

// }

// let num = format(3700)

// console.log (num)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // 7- Password (PAS FINI)

// const password =""

// const generatePassword = (num) => {
//     for (i=0; i<= num.lenght; i++) {
//         password.push()
//     }

// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 8- Let's play
// let diceResult = 0

// const launchDice = (numberOfDice) => {
//     for (i=0; i<= numberOfDice.lenght; i++) {
//         diceResult= Math.floor(Math.random() * 6)
//     }

// }

console.log (Math.floor(Math.random() * 6))