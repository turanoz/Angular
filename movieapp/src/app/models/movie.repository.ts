import {Movie} from "./movie";

export class MovieRepository {
  private movies: Movie[];

  constructor() {
    this.movies = [
      {id: 1, title: "Film 1", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis eius ex illum ipsa nostrum optio, sit vel voluptas voluptatibus. Explicabo nulla numquam repellendus tempore. Ea excepturi quod quos sunt.\n", imageUrl: "1.jpeg", isPopular: true,datePublished:new Date(1990,10,7)},
      {id: 2, title: "Film 2", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis eius ex illum ipsa nostrum optio, sit vel voluptas voluptatibus. Explicabo nulla numquam repellendus tempore. Ea excepturi quod quos sunt.\n", imageUrl: "2.jpeg", isPopular: false,datePublished:new Date(1985,5,9)},
      {id: 3, title: "Film 3", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis eius ex illum ipsa nostrum optio, sit vel voluptas voluptatibus. Explicabo nulla numquam repellendus tempore. Ea excepturi quod quos sunt.\n", imageUrl: "3.jpeg", isPopular: false,datePublished:new Date(1965,3,12)},
      {id: 4, title: "Film 4", description: "film 4 açıklama", imageUrl: "4.jpeg", isPopular: true,datePublished:new Date(1882,12,25)},
      {id: 5, title: "Film 5", description: "film 5 açıklama", imageUrl: "5.jpeg", isPopular: true,datePublished:new Date(2015,11,30)}
    ];
  }

  getMovies(): Movie[] {
    return this.movies;
  }

  getPopularMovies(): Movie[] {
    return this.movies.filter(i => i.isPopular);
  }

  getMovieById(id: number): Movie {
    return this.movies.find(i => i.id == id);
  }
}
