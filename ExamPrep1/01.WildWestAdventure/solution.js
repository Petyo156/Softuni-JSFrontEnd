function solve(input) {
    let posseMembersCount = Number(input[0]);
    let posseMembers = [];

    class PosseMember {
        constructor(memberName, hp, bullets) {
            this.memberName = memberName;
            this.hp = Number(hp);
            this.bullets = Number(bullets);
        }
    }

    // Initialize posse members
    for (let i = 1; i <= posseMembersCount; i++) {
        let token = input[i].split(" ");
        let posseMember = new PosseMember(token[0], token[1], token[2]);
        posseMembers.push(posseMember);
    }

    // Process commands
    for (let i = posseMembersCount + 1; i < input.length; i++) {
        let command = input[i];

        // Stop processing if "Ride Off Into Sunset" is encountered
        if (command === "Ride Off Into Sunset") {
            break;
        }

        let commandParts = command.split(" - ");
        let action = commandParts[0];
        let memberName = commandParts[1];

        // Check if the member is still in the posse before performing any action
        let member = posseMembers.find(member => member.memberName === memberName);
        if (!member) continue;

        if (action === "FireShot") {
            fireShot(memberName, commandParts[2]);
        } else if (action === "TakeHit") {
            takeHit(memberName, Number(commandParts[2]), commandParts[3]);
        } else if (action === "Reload") {
            reload(memberName);
        } else if (action === "PatchUp") {
            patchUp(memberName, Number(commandParts[2]));
        }
    }

    function fireShot(memberName, target) {
        let member = posseMembers.find(member => member.memberName === memberName);

        if (member.bullets > 0) {
            member.bullets -= 1;
            console.log(`${memberName} has successfully hit ${target} and now has ${member.bullets} bullets!`);
        } else {
            console.log(`${memberName} doesn't have enough bullets to shoot at ${target}!`);
        }
    }

    function takeHit(memberName, damage, attacker) {
        let member = posseMembers.find(member => member.memberName === memberName);

        member.hp -= damage;

        if (member.hp > 0) {
            console.log(`${memberName} took a hit for ${damage} HP from ${attacker} and now has ${member.hp} HP!`);
        } else {
            console.log(`${memberName} was gunned down by ${attacker}!`);
            posseMembers = posseMembers.filter(m => m.memberName !== memberName);
        }
    }

    function reload(memberName) {
        let member = posseMembers.find(member => member.memberName === memberName);

        if (member.bullets < 6) {
            let bulletsNeeded = 6 - member.bullets;
            member.bullets = 6;
            console.log(`${memberName} reloaded ${bulletsNeeded} bullets!`);
        } else {
            console.log(`${memberName}'s pistol is fully loaded!`);
        }
    }

    function patchUp(memberName, amount) {
        let member = posseMembers.find(member => member.memberName === memberName);

        if (member.hp < 100) {
            let newHp = member.hp + amount;
            let recoveredAmount = Math.min(amount, 100 - member.hp);
            member.hp = Math.min(newHp, 100);
            console.log(`${memberName} patched up and recovered ${recoveredAmount} HP!`);
        } else {
            console.log(`${memberName} is in full health!`);
        }
    }

    // Print the final state of each member
    posseMembers.forEach(member => {
        console.log(`${member.memberName}\n HP: ${member.hp}\n Bullets: ${member.bullets}`);
    });
}

// Test case
solve(["2",
    "Gus 100 0",
    "Walt 100 6",
    "FireShot - Gus - Bandit",
    "TakeHit - Gus - 100 - Bandit",
    "Reload - Walt",
    "PatchUp - Walt - 20",
    "PatchUp - Gus - 50",
    "Ride Off Into Sunset"]);
