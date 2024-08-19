function solve(input){
    class Hero{
        constructor(name, level, items) {
            this.name = name;
            this.level = Number(level); // Convert level to a number
            this.items = items ? items.split(', ') : []; // Convert items to an array
        }
    }

    let heroes = [];

    input.forEach(element => {
        let [name, level, items] = element.split(" / ");
        heroes.push(new Hero(name, level, items));
    });

    heroes.sort((a, b) => a.level - b.level);

    heroes.forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    });
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    );