import { Button } from './Button';
import '../styles/sidebar.scss';

interface GenreContentProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface GenreProps {
  genres: Array<GenreContentProps>;
  selectedGenreId: Number;
  handleClickButton: (id: number) => void;
}

export function SideBar({ genres, selectedGenreId, handleClickButton }: GenreProps) {
  // Complete aqui  

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>

  )
}