function solve(sym1, sym2){
    function getCharCode(sym1, sym2){
        return [sym1.charCodeAt(0), sym2.charCodeAt(0)];
    }
    
    char1 = getCharCode(sym1, sym2)[0];
    char2 = getCharCode(sym1, sym2)[1];

    if(char1 > char2) {
        let temp = char1;
        char1 = char2;
        char2 = temp;
    }

    let arr = [];
    for(let i = char1 + 1; i < char2; i++){
        arr.push(i);
    }
    let result = [];
    arr.forEach(element => result.push(String.fromCharCode(element)));
    //result.forEach(element => console.add(element + ', '));

    console.log(result.join(" "));
}
solve('#',
':');