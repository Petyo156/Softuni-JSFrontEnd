

function solve(input){
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }

    input.forEach(element => {
        let chovek = new Person(element, element.length);
        console.log(`Name: ${chovek.name} -- Personal Number: ${chovek.age}`);
    });
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );
