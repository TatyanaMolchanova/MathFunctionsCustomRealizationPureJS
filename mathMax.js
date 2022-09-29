const mathMax = array => {
    if (array.length === 0) return Infinity;
    let maxNumber = array[0]
    array.forEach(number => {
        const currentNumber = number
        if (currentNumber > maxNumber) {
            maxNumber = currentNumber
        }
    })
    
    return maxNumber
}

console.log(mathMax([1, 30, 400, 43, 64, 93, 33333]))

// 2 variant
// const mathMax = array => {
//     let maxNumber = array[0]
//     for (let i = 1; i < array.length; i++) {
//         const currentNumber = array[i]
//         if (currentNumber > maxNumber) {
//             maxNumber = currentNumber
//         }
//     }
//     return maxNumber
// }

// console.log(mathMax([1, 30, 400, 43, 64, 93, 33333]))