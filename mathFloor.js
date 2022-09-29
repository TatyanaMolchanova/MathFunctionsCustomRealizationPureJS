const mathFloor = (number) => {
    return number % 1 ? number + (number < 0 ? - 1 : 0) - (number % 1) : number
}

console.log("", mathFloor(45.95))
console.log("", mathFloor(-45.95))
console.log("", mathFloor(7.004))
console.log("", mathFloor(-0.95))
console.log("", mathFloor(-4))
console.log("", mathFloor(-7.004))

