function solve(num){
    function getDividers(num){
        let arr = [];
        for(let i = 0; i < num; i++){
            num % i === 0 ? arr.push(i) : "";
        }
        return arr;
    }
    let dividers = getDividers(num);
    let dividersSum = 0;
    dividers.forEach(element => {
        dividersSum += element;
    });
    dividersSum === num ? console.log("We have a perfect number!") : console.log("It's not so perfect.");
}
solve(28);