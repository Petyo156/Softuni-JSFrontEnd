function func(words, sentence) {
    let wordsArr = words.split(", ");
    let sentenceArr = sentence.split(" ");

    for(let i = 0; i < wordsArr.length; i++){
        for(let j = 0; j < sentenceArr.length; j++){
            if(wordsArr[i].length === sentenceArr[j].length &&
                sentenceArr[j].includes("*")) {
                    sentenceArr[j] = wordsArr[i];
            }
        }
    }
    console.log(sentenceArr.join(" "));
}
func('great, learning', 'softuni is ***** place for ******** new programming languages');