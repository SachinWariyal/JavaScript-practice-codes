// let get_randomNumber =(min , max)=>{
//     return Math.random() * (max-min) + min
// };

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// let LuckyNum = console.log(getRandomInt(1,100));

// let usersNum = prompt("Enter a Number: ");

// if(usersNum===LuckyNum){
//     console.log("Hurrayyy You are the winner")
// }
//const prompt = require("prompt-sync")();

// As this code has prompt it will work only on browser or replit.

console.log('Guess the number')


let RN = Math.floor(Math.random() * 100 + 1);



let b;
for (let i = 99; i > 0 && b != RN; i--) {
  b = prompt('Guess the number')
  if (b > RN) {
    console.log(' Random number is less than ' + b)
  }
  else if (b < RN) {
    console.log(' Random number is greater than ' + b)
  }
  else { }
  if (b != RN) {
    console.log('you have now ' + i + ' try')
  }
  else { }

  if (i < 2) {
    console.log('better luck next time')
  }

  else if (b == RN) {
    console.log('RIght answer')
    console.log('you did this on ' + i + 'th try')
  }
}

console.log('how was my game')




