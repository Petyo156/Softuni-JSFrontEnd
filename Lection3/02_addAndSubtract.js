function solve(a, b, c){
    function add(a, b){
        return a+b;
    }
    function subtract(a, b){
        return a-b;
    }
    console.log(subtract(add(a,b), c));
}