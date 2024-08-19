function solve(input) {
    class Movie {
        constructor(name) {
            this.name = name;
            this.director = '';
            this.date = '';
        }
    }

    let movies = [];

    input.forEach(element => {
        if (element.startsWith("addMovie ")) {
            let name = element.substring(9);
            movies.push(new Movie(name));
        } else if (element.includes(" directedBy ")) {
            let [name, director] = element.split(" directedBy ");
            let movie = movies.find(m => m.name === name);
            if (movie) {
                movie.director = director;
            }
        } else if (element.includes(" onDate ")) {
            let [name, date] = element.split(" onDate ");
            let movie = movies.find(m => m.name === name);
            if (movie) {
                movie.date = date;
            }
        }
    });

    let completeMovies = movies.filter(m => m.name && m.director && m.date);
    completeMovies.forEach(m => console.log(JSON.stringify(m)));
}

