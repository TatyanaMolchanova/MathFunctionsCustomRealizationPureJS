const mathSqrt = (base) => {
    for (let i = 1; i < base; i++) {
        if (i * i === base) {
            return i;
        } 
    }
}


console.log("", mathSqrt(49, 2))
console.log("", mathSqrt(16, 2))
console.log("", mathSqrt(27, 3))