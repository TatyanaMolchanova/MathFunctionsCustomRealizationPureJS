const mathAbs = (stringNumber) => {
    if (typeof +stringNumber !== 'number') return NaN;
    if (stringNumber === null) return 0;

    if (+stringNumber >= 0) {
        return +stringNumber;
    } else {
        return -(+stringNumber) 
    }
}

console.log(mathAbs('-1'))
console.log(mathAbs('-541'))
console.log(mathAbs('901'))
console.log(mathAbs(-2))
console.log(mathAbs(null))
console.log(mathAbs([]))
console.log(mathAbs([2]))
console.log(mathAbs([1,2]))
console.log(mathAbs({}))
console.log(mathAbs('string'))
console.log(mathAbs())

