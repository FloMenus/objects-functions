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

// 5- Add Up

// const addUp = (num) => {

//     let numAddition = 0
    
//      for (i=1; i<= num; i++) {


//         numAddition += i
//      }
//      return numAddition

// }


// console.log (addUp(12))

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



// const generatePassword = (num) => {


//     if (num < 6 || num > 15) {
//         return "Error"
//     }
    
//     let password =''

//     for (i=0; i< num; i++) {
//         let nbAscii =  Math.random() * (91 - 65) + 65
//         let res = String.fromCharCode(nbAscii)
//         password+=res
//     }
//     return password

// }
// console.log (generatePassword(15))
// console.log (generatePassword(14))
// console.log (generatePassword(10))
// console.log (generatePassword(5))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 8- Let's play

// const launchDice = (numberOfDice) => {


//     if (numberOfDice <= 0) {
//         return "Error"
//     }

//     let diceResult = 0

//     for (i=0; i < numberOfDice; i++) {
//         diceResult += Math.floor(Math.random() * 6)
//     }

//     return diceResult

// }

// ////////////////////////////////

// let joueur1 = launchDice(5);
// let joueur2 = launchDice(5);

// if (joueur1 > joueur2) {
//     console.log(`Le joueur 1 a gagn?? avec ${joueur1} points`)
// }
// else if (joueur1 < joueur2) {
//     console.log(`Le joueur 2 a gagn?? avec ${joueur2} points`)
// }
// else {
//     console.log (`Il y a ??galit?? avec ${joueur1} points`)
// }

