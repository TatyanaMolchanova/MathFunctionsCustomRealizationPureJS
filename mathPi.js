const mathPi = () => {
    let pi = 0;
    for (let i = 0; i < 100000000; i++) {
        const multiplier = (i % 2 === 0) ? 1 : -1; //-1^n
        pi += multiplier * (1 / (2 * i + 1))
    }
    return pi * 4; // get PI
}

console.log(mathPi())



// const mathPi = (circumference, radius) => {
//     const pi = circumference / (2 * radius)
//     return pi;
// }

// console.log(mathPi(778, 248))
// console.log(mathPi(20.7, 6.6))
// console.log(mathPi(42013.2, 6690))




// const mathPi = (circumference, diameter) => {
//     console.log("PI", circumference / diameter)
    
//     return circumference / diameter;
// }

// console.log(mathPi(778, 248))
// console.log(mathPi(20.7, 6.6))