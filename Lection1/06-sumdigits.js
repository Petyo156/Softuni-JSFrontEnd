function sumDigits(number) {
    let sum = 0;

    let currentNumber = number;

    while (currentNumber > 0) {
        sum += currentNumber % 10;
        currentNumber = parseInt(currentNumber / 10);
    }
    console.log(sum);
}

sumDigits(245678);