/*function func(word, sentence) {
    let wordBefore = word;
    word = word.toLowerCase();
    sentence = sentence.toLowerCase();
    
    let regex = new RegExp(word, "g");
    
    if(regex.test(sentence)){
        console.log(wordBefore);
    } else {
        console.log(`${wordBefore} not found!`)
    }
}*/
function func(word, sentence) {
    let wordBefore = word;
    word = word.toLowerCase();
    sentence = sentence.toLowerCase();
    
    let regex = new RegExp(`\\b${word}\\b`, 'i');
    
    if (regex.test(sentence)) {
        console.log(wordBefore);
    } else {
        console.log(`${wordBefore} not found!`);
    }
}
func('javascript', 'JavaScript is the best programming language');