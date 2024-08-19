function print(number1, number2) {
    let sum = 0;
    let output = '';

    for (let i = number1; i <= number2; i++) {
        output+=(i + " ");
        sum += i;
    }
    console.log(output.trim());
    console.log("Sum: " + sum);
}

print(50, 60);