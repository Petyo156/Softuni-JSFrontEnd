function solve(a, b){
    function getFactorial(num){
        if (num === 0) return 1; // Special case for 0!
        let result = 1;
        for(let i = num; i > 1; i--){
            result *= i;
        }
        return result;
    }

    console.log((getFactorial(a) / getFactorial(b)).toFixed(2));
}

solve(5, 2);