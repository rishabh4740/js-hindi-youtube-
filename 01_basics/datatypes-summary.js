// # Primitive

//  7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3625626773625n



// Reference (NOn primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "rishabh",
    age: 17,
}

const myFunction = function(){
    console.log("hello world")
}

console.log(typeof outsideTemp);