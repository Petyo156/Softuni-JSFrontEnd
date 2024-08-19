function solve(number){
    arr = number.toString().split("");
    function oddSum(arr){
        let result = 0;
        arr.forEach(element => {
            (element % 2 != 0) ? result += Number(element) : "";  
        });
        return result;
    }
    function evenSum(arr){
        let result = 0;
        arr.forEach(element => {
            (element % 2 == 0) ? result += Number(element) : "";  
        });
        return result;
    }
    console.log(`Odd sum = ${oddSum(arr)}, Even sum = ${evenSum(arr)}`)
}
solve(3495892137259234);