const mathMin = array => {
    if (array.length === 0) return Infinity;
    let minNumber = array[0]
    array.forEach(number => {
        const currentNumber = number
        if (currentNumber < minNumber) {
            minNumber = currentNumber
        }
    })
    
    return minNumber
}

console.log(mathMin([1, 30, 400, 43, 64, 93, 33333]))