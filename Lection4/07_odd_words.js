function solve(input) {
    input = input.toLowerCase();

    let wordCounts = {};

    input.split(" ").forEach(word => {
        if (wordCounts[word]) {
            wordCounts[word]++;
        } else {
            wordCounts[word] = 1;
        }
    });

    let result = [];
    for (let word in wordCounts) {
        if (wordCounts[word] % 2 !== 0) {
            result.push(word);
        }
    }

    console.log(result.join(" "));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');