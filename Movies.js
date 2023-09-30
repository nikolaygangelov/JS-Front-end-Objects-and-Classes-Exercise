function movieInfoList(movieList) {
    let movies = [];

    movieList.forEach(element => {
        if (element.includes('addMovie')) {
            const [_, name] = element.split('addMovie ');
            movies.push(
                {name}
            );
        } else if (element.includes('directedBy')) {
            const [movieName, directorName] = element.split(' directedBy ');
            const movie = movies.find(m => m.name === movieName);

            if (movie) {
                movie.director = directorName;
            }
        } else if (element.includes('onDate')) {
            const [movieName, date] = element.split(' onDate ');
            const movie = movies.find(m => m.name === movieName);

            if (movie) {
                movie.date = date;
            }
        }
    });
    
    movies.filter(m => m.date && m.director && m.name)
          .forEach(m => console.log(JSON.stringify(m)));
}

movieInfoList([ 'addMovie Fast and Furious', 'addMovie Godfather', 'Inception directedBy Christopher Nolan', 
'Godfather directedBy Francis Ford Coppola', 'Godfather onDate 29.07.2018', 'Fast and Furious onDate 30.07.2018', 
'Batman onDate 01.08.2018', 'Fast and Furious directedBy Rob Cohen' ])