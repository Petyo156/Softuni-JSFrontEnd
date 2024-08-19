function solve (input){
    class Word{
        constructor(name) {
            this.name = name;
            this.occurrences = 0; 
        }
    }

    let arr = input[0].split(" ");
    let words = [];

    arr.forEach(element => {
       words.push(new Word(element)) 
    });

    for(let i = 1; i < input.length; i++){
        words.forEach(word => word.name === input[i] ? word.occurrences++ : null);
    }

    words.sort((a, b) => b.occurrences - a.occurrences);
    words.forEach(word =>
        console.log(`${word.name} - ${word.occurrences}`)
    );

}

solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    );