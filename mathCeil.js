const mathCeil = (number) => {
    return number % 1 ? number + (number > 0 ? + 1 : 0) - (number % 1) : number
}

console.log("", mathCeil(.95))
console.log("", mathCeil(4))
console.log("", mathCeil(7.004))
console.log("", mathCeil(-0.95))
console.log("", mathCeil(-4))
console.log("", mathCeil(-7.004))

