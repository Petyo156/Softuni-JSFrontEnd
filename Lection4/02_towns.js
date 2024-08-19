function solve(input){
    input.forEach(element => {
        const words = element.split(" | ");
        const townObj = {
            town: words[0],
            latitude: Number(words[1]).toFixed(2),
            longitude: Number(words[2]).toFixed(2)
        }
        console.log(townObj);
    });
}

solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
    );