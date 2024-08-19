function func(arr) {
    let currentArr = [...arr]; 
    let arrResult = [];

    while (currentArr.length > 0) {
        getSmallestNum();
        if (currentArr.length > 0) { 
            getBiggestNum();
        }
    }

    return arrResult;

    function getSmallestNum() {
        let smallestNum = Math.min(...currentArr);
        arrResult.push(smallestNum);
        currentArr.splice(currentArr.indexOf(smallestNum), 1);
    }

    function getBiggestNum() {
        let biggestNum = Math.max(...currentArr);
        arrResult.push(biggestNum);
        currentArr.splice(currentArr.indexOf(biggestNum), 1);
    }
}


func([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
