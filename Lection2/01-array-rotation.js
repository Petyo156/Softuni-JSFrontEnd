function func(array, numberOfRotations) {
    for(let i = 0; i < numberOfRotations; i++) {
        let removedNum = array.shift(); 
        array.push(removedNum);
    }

    console.log(array.join(" "));
}

func([32, 21, 61, 1], 4);