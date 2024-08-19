function solve(arr){
    arr.forEach(element => {
        checkIfPalindrome(element);
    });

    function checkIfPalindrome(element){
        let numLeft = element.toString();
        let numRight = reverse(element.toString());
        (numLeft === numRight) ? console.log("true") : console.log("false");
    }

    function reverse(element){
        return element.split("").reverse().join("");
    }
}
solve([123,323,421,121]);