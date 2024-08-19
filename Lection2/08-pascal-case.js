function func(sentence) {
    let regex = new RegExp("[A-Z][a-z]*", "g");
    let iter = sentence.matchAll(regex);
    let arr = Array.from(iter);
    console.log(arr.join(", "));
}
func('SplitMeI');