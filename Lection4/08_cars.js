function solve(input) {
    let parkingLot = new Set();

    input.forEach(element => {
        let [command, number] = element.split(", ");
        if (command === "IN") {
            parkingLot.add(number);
        } else if (command === "OUT") {
            parkingLot.delete(number);
        }
    });

    if (parkingLot.size === 0) {
        console.log("Parking Lot is Empty");
    } else {
        Array.from(parkingLot)
            .sort((a, b) => a.localeCompare(b))
            .forEach(number => console.log(number));
    }
}

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
    );