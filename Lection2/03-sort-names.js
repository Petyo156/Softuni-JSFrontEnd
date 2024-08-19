function func(names){
    let arr = names.sort((a, b) => a.localeCompare(b));
    arr.forEach((element, index) => {
        console.log(`${index+1}.${element}`);
    });
}
func(["John",

    "Bob",
    
    "Christina",
    
    "Ema"]);