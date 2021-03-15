import { MovieCard } from './MovieCard';
import '../styles/content.scss';

interface MovieContentProps {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface MovieProps {
  movies: Array<MovieContentProps>
  selectedGenre: {
    title: string
  };
}

export function Content({ movies, selectedGenre }: MovieProps) {
  // Complete aqui

  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}