function func(words) {
    const regex = /#[a-zA-Z]+/g;

    let found = words.match(regex);
    found.forEach(element => {
        console.log(element.substring(1));
    });
}

func('Nowadays everyone uses # to tag a #special word in #socialMedia');