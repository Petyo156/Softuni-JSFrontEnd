function solve(input1, input2){
    let products = {};
    
    for(let i = 0; i < input1.length; i += 2) {
        let product = input1[i];
        let quantity = Number(input1[i + 1]);
        products[product] = quantity;
    }

    for(let i = 0; i < input2.length; i += 2) {
        let product = input2[i];
        let quantity = Number(input2[i + 1]);
        if (products[product] !== undefined) {
            products[product] += quantity;
        } else {
            products[product] = quantity;
        }
    }

    for (let product in products) {
        console.log(`${product} -> ${products[product]}`);
    }
}


solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    );