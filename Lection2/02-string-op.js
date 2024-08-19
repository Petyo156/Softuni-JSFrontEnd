function func(arr, num){
    let arr2 = [];
    for(let i = 0; i < arr.length; i+=num){
        arr2.push(arr[i]);
    }
    for(let i = 0; i < arr2.length; i++){
        //console.log(arr2[i]);
    }
    return arr2;
}
func(['5',

    '20',
    
    '31',
    
    '4',
    
    '20'],
    
    2)