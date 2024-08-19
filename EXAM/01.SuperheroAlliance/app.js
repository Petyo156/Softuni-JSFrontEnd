function solve(input) {
    let superheroesCount = parseInt(input[0]);
    let superheroes = [];

    class SuperHero {
        constructor(superheroName, superpowers, energy) {
            this.memberName = superheroName;
            this.superpowers = superpowers;
            this.energy = Number(energy);
        }
    }

    for (let i = 1; i <= superheroesCount; i++) {
        let token = input[i].split("-");
        let superpowers = token[1].split(","); 
        let superhero = new SuperHero(token[0], superpowers, token[2]);
        superheroes.push(superhero);
    }

    function usePower(superheroName, superpower, energyRequired) {
        let hero = superheroes.find(h => h.memberName === superheroName);
        if (hero) {
            if (hero.superpowers.includes(superpower) && hero.energy >= energyRequired) {
                hero.energy -= energyRequired;
                console.log(`${superheroName} has used ${superpower} and now has ${hero.energy} energy!`);
            } else {
                console.log(`${superheroName} is unable to use ${superpower} or lacks energy!`);
            }
        }
    }

    function train(superheroName, trainingEnergy) {
        let hero = superheroes.find(h => h.memberName === superheroName);
        if (hero) {
            if (hero.energy < 100) {
                let energyBefore = hero.energy;
                hero.energy = Math.min(100, hero.energy + trainingEnergy);
                let energyGained = hero.energy - energyBefore;
                console.log(`${superheroName} has trained and gained ${energyGained} energy!`);
            } else {
                console.log(`${superheroName} is already at full energy!`);
            }
        }
    }

    function learn(superheroName, newSuperpower) {
        let hero = superheroes.find(h => h.memberName === superheroName);
        if (hero) {
            if (hero.superpowers.includes(newSuperpower)) {
                console.log(`${superheroName} already knows ${newSuperpower}.`);
            } else {
                hero.superpowers.push(newSuperpower);
                console.log(`${superheroName} has learned ${newSuperpower}!`);
            }
        }
    }

    for (let i = superheroesCount + 1; i < input.length; i++) {
        let command = input[i];

        if (command === "Evil Defeated!") {
            break;
        }

        let commandParts = command.split(" * ");
        let action = commandParts[0];
        let superheroName = commandParts[1];

        if (action === "Use Power") {
            usePower(superheroName, commandParts[2], Number(commandParts[3]));
        } else if (action === "Train") {
            train(superheroName, Number(commandParts[2]));
        } else if (action === "Learn") {
            learn(superheroName, commandParts[2]);
        }
    }

    superheroes.forEach(hero => {
        console.log(`Superhero: ${hero.memberName}`);
        console.log(` - Superpowers: ${hero.superpowers.join(", ")}`);
        console.log(` - Energy: ${hero.energy}`);
    });
}

solve ([
    "2",
    "Iron Man-Repulsor Beams,Flight-100",
    "Thor-Lightning Strike,Hammer Throw-50",
    "Train * Thor * 20",
    "Learn * Thor * Hammer Throw",
    "Use Power * Iron Man * Repulsor Beams * 30",
    "Evil Defeated!"
])
;
