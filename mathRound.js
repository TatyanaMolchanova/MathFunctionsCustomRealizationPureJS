const mathRound = (number) => {
    return number > 0 ? 
    (number % 1 >= 0.5 ? number + 1 - (number % 1) : number - (number % 1)) :
    (number % 1 >= -0.5 ? number - (number % 1) : number - (number % 1) - 1);
   }

console.log("", mathRound(45.95))
console.log("", mathRound(-45.95))
console.log("", mathRound(7.004))
console.log("", mathRound(-0.95))
console.log("", mathRound(-4))
console.log("", mathRound(20.49))
console.log("", mathRound(20.5))
console.log("", mathRound(-20.5))
console.log("", mathRound(-20.51))

