function check(number){
    let arr = splitNumberIntoDigits(number);
    let sum = 0;
    let lastElement = arr[0];
    let sameValues = true;
    arr.forEach(element => {
        if(lastElement !== element){
            sameValues = false;
        }
        lastElement = parseInt(element);
        sum += lastElement;
    });
    console.log(sameValues);
    console.log(sum);

    function splitNumberIntoDigits(number) {
        return number
            .toString()
            .split("")
            .map(Number);
    }
}

check(2422);