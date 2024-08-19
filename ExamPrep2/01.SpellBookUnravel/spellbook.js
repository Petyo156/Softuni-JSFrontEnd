function solve(input){
    let spell = input[0];

    for(let i = 1; i < input.length; i++){
        if(input[i] === "End"){
            console.log(`The concealed spell is: ${spell}`);
            break;
        }

        if(input[i] === "RemoveEven"){

            let updatedSpell = "";
            for(let j = 0; j < spell.length; j += 2){
                updatedSpell += spell[j];
            }
            spell = updatedSpell;
            console.log(spell);

        } else if(input[i].includes("TakePart")){

            let [command, indexStart, indexEnd] = input[i].split('!');
            spell = spell.slice(Number(indexStart), Number(indexEnd));
            console.log(spell);

        } else if(input[i].includes("Reverse")){
            
            let [command, substring] = input[i].split('!');
            let index = spell.indexOf(substring);
            if(index !== -1){
                let reversedSubstring = substring.split('').reverse().join('');
                spell = spell.slice(0, index) + spell.slice(index + substring.length) + reversedSubstring;
                console.log(spell);
            } else {
                console.log("Error");
            }

        }
    }
}

solve(["asAsl2adkda2mdaczsa", 
    "RemoveEven",
    "TakePart!1!9",
    "Reverse!maz",
    "End"
]);
