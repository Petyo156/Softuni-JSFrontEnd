/*function checkPass(pass){
    const passLength = pass.toString().length >= 6 && pass.toString().length <= 10 ? true : "Password must be between 6 and 10 characters";
    const onlyLettersAndDigits =  /^[A-Za-z0-9]*$/.test(pass.toString()) ? true : "Password must have at least 2 digits";
    function atLeastTwoDigits(pass) {
        let count = 0;
        pass.toString().split("").forEach(element => {
            if (!isNaN(element) && element !== ' ') {
                count++;
            }
        });
        return count >= 2;
    }

    if(passLength && onlyLettersAndDigits && atLeastTwoDigits(pass)){
        console.log("Password is valid");
    }

}*/

function checkPass(pass){
    const passStr = pass.toString();
    const passLength = passStr.length >= 6 && passStr.length <= 10;
    const onlyLettersAndDigits = /^[A-Za-z0-9]*$/.test(passStr);
    
    function atLeastTwoDigits(pass) {
        let count = 0;
        pass.toString().split("").forEach(element => {
            if (!isNaN(element) && element !== ' ') {
                count++;
            }
        });
        return count >= 2;
    }

    const twoDigits = atLeastTwoDigits(pass);

    if (passLength && onlyLettersAndDigits && twoDigits) {
        console.log("Password is valid");
    } else {
        if (!passLength) {
            console.log("Password must be between 6 and 10 characters");
        }
        if (!onlyLettersAndDigits) {
            console.log("Password must consist only of letters and digits");
        }
        if (!twoDigits) {
            console.log("Password must have at least 2 digits");
        }
    }
}

checkPass('Pa$s$s');