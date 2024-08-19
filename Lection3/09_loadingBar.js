function solve(percent){
    percent /= 10;
    let arr = Array(10).fill('.');
    arr.fill('%', 0, percent);
    
    if (percent !== 10)  {
        console.log(`${percent * 10}% [${arr.join("").toString()}]`);
        console.log("Still loading...");
    } 
    else { 
        console.log("100% Complete!"); 
    }
}

solve(70);